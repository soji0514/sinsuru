# 🔍 Git 푸시 실패 진단 및 해결

## 1단계: 상세 진단

터미널에서 다음 명령어를 **순서대로** 실행하고 **모든 출력**을 복사하세요:

```bash
# 현재 위치 확인
pwd

# Git 저장소인지 확인
ls -la | grep .git

# 현재 브랜치 확인
git branch -a

# 최근 커밋 5개 확인
git log --oneline -5

# 원격 저장소 확인
git remote -v

# 로컬과 원격 차이 확인
git status

# 푸시 안 된 커밋 확인
git log origin/main..HEAD

# 또는 master 브랜치라면
git log origin/master..HEAD
```

---

## 2단계: 문제별 해결 방법

### 🔴 문제 A: "fatal: not a git repository"

**원인:** 잘못된 디렉토리에 있음

**해결:**
```bash
# 올바른 프로젝트 폴더 찾기
find ~ -name "sinsuru2" -type d 2>/dev/null

# 올바른 폴더로 이동
cd /올바른/경로/sinsuru2

# 다시 확인
git status
```

---

### 🔴 문제 B: "Your branch is up to date with 'origin/main'"

**원인:** 로컬 커밋이 실제로 생성되지 않았음

**해결:**
```bash
# 변경된 파일 확인
git status

# 모든 파일 추가 (강제)
git add -A

# 커밋 생성 (빈 커밋이라도 강제)
git commit -m "Add all build files" --allow-empty

# 커밋 확인
git log --oneline -1

# 푸시
git push origin main --force
```

---

### 🔴 문제 C: "Authentication failed" 또는 "Permission denied"

**원인:** GitHub 인증 실패

**해결 방법 1 - Personal Access Token 사용:**

```bash
# 1. GitHub에서 토큰 생성
# https://github.com/settings/tokens
# "Generate new token (classic)" 클릭
# 권한: repo 전체 선택
# 토큰 복사 (ghp_xxxxxxxxxxxx)

# 2. 원격 저장소 URL에 토큰 포함
git remote set-url origin https://ghp_YOUR_TOKEN_HERE@github.com/soji0514/sinsuru2.git

# 3. 푸시
git push origin main --force
```

**해결 방법 2 - SSH 사용:**

```bash
# 1. SSH 키 생성 (이미 있으면 스킵)
ssh-keygen -t ed25519 -C "your-email@example.com"
# Enter 3번 눌러 기본값 사용

# 2. 공개키 복사
cat ~/.ssh/id_ed25519.pub

# 3. GitHub에 추가
# https://github.com/settings/keys
# "New SSH key" 클릭
# 복사한 키 붙여넣기

# 4. 원격 저장소 URL 변경
git remote set-url origin git@github.com:soji0514/sinsuru2.git

# 5. 푸시
git push origin main --force
```

---

### 🔴 문제 D: "src refspec main does not match any"

**원인:** main 브랜치가 없고 master 브랜치를 사용 중

**해결:**
```bash
# 현재 브랜치 확인
git branch

# main으로 브랜치 이름 변경
git branch -M main

# 기본 브랜치 설정
git config --global init.defaultBranch main

# 푸시
git push origin main --force --set-upstream
```

---

### 🔴 문제 E: "Updates were rejected"

**원인:** 원격 저장소가 로컬보다 최신

**해결:**
```bash
# 강제 푸시 (주의: 원격 저장소 덮어씀)
git push origin main --force

# 또는 안전하게
git pull origin main --rebase
git push origin main
```

---

## 3단계: 완전 초기화 (최후의 수단)

위의 모든 방법이 실패하면:

```bash
# 1. 현재 작업 백업
git stash

# 2. 원격 저장소 다시 연결
git remote remove origin
git remote add origin https://github.com/soji0514/sinsuru2.git

# 3. 최신 상태 가져오기
git fetch origin

# 4. main 브랜치로 리셋
git reset --hard origin/main

# 5. 백업한 작업 복원
git stash pop

# 6. 모든 파일 다시 추가
git add -A
git commit -m "Rebuild: Add all configuration files"

# 7. 강제 푸시
git push origin main --force
```

---

## 4단계: 푸시 성공 확인

푸시 성공 시 다음과 같이 나와야 합니다:

```bash
$ git push origin main --force

Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 8 threads
Compressing objects: 100% (30/30), done.
Writing objects: 100% (35/35), 12.34 KiB | 2.06 MiB/s, done.
Total 35 (delta 15), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (15/15), completed with 5 local objects.
To https://github.com/soji0514/sinsuru2.git
 + 6bc2ffc...abc1234 main -> main (forced update)
                     ^^^^^^^^
                     새 커밋!
```

**중요:** `6bc2ffc...새커밋` 형태로 나와야 합니다!

---

## 5단계: GitHub 웹에서 최종 확인

푸시 후 즉시:

1. **커밋 확인:**
   https://github.com/soji0514/sinsuru2/commits/main
   - 새 커밋이 맨 위에 있어야 함

2. **파일 확인:**
   https://github.com/soji0514/sinsuru2/blob/main/package.json
   - 404 에러가 아니어야 함
   - 내용에 `"@supabase/supabase-js": "^2.49.8"` 있어야 함

---

## 📤 필수 정보 제공

다음을 **모두** 복사해서 보내주세요:

### 1. Git 상태:
```bash
git status
# [출력 붙여넣기]
```

### 2. 브랜치 정보:
```bash
git branch -a
# [출력 붙여넣기]
```

### 3. 최근 커밋:
```bash
git log --oneline -5
# [출력 붙여넣기]
```

### 4. 원격 저장소:
```bash
git remote -v
# [출력 붙여넣기]
```

### 5. 푸시 시도 결과:
```bash
git push origin main --force
# [전체 출력 붙여넣기]
```

### 6. GitHub 확인:
- package.json 보임: Yes / No
- 404 에러: Yes / No

---

## 💡 빠른 체크리스트

- [ ] 올바른 디렉토리에 있나요? (`pwd` 확인)
- [ ] `.git` 폴더가 있나요? (`ls -la`)
- [ ] 로컬 커밋이 있나요? (`git log`)
- [ ] 원격 저장소가 올바른가요? (`git remote -v`)
- [ ] 인증이 되나요? (토큰 또는 SSH)
- [ ] 푸시 명령어에 에러가 없나요?

모든 항목이 ✅라면 푸시가 성공해야 합니다!
