# 📖 개요

- 사용자의 공부를 도와주는 웹 사이트입니다.
  <br>

# 🗂️ 프로젝트 폴더 및 파일에 대한 설명입니다.

### node_modules

- 프로젝트에서 사용한 모듈을 모아놓은 폴더입니다.

### public

- 프로젝트에서 사용하는 정적 파일을 모아놓았습니다.

#### manifest.json

- 시스템의 정보를 json 형태로 기술하고, 웹 앱의 다운로드를 네이티브 앱과 유사한 형태로 제공할 수 있게 도와주는 파일입니다.

#### robots.txt

- 시스템의 크롤러를 트래픽하기 위한 파일입니다.

### src

- 프로젝트의 기능 구현시 사용하는 파일을 모아놓았습니다.

### .gitignore

- git push시에 올리지 않을 파일을 기술합니다.

### package.json, package-lock.json

- npm을 통해 설치한 모듈들의 의존성을 관리하는 파일입니다.

### README.md

- 프로젝트의 내용을 설명하기 위해 사용하는 파일입니다.

### tsconfig.json

- ts를 js로 변환 시키는 컴파일 설정을 정의 해놓은 파일입니다.
  <br>

# 🌴 Git Branch 리스트입니다.

### main

- 상용 배포를 위한 Branch입니다.
- dev에서 pull request 요청이 오면, merge합니다.

### dev

- 개발 배포를 위한 Branch입니다.
- devs/[*]에서 pull request 요청이 오면, merge합니다.
- 일정 기능이 완료되면, main에 pull request를 요청합니다.

### des/[*]

- 기능별 구현을 위한 Branch입니다.
- 개발 완료 후, dev에 pull request 및 local, remote에서 삭제합니다.
  <br>

# 🏷️ Git의 Commit 타입입니다.

### [branch 명]/Init

- 최초 커밋시에 사용합니다.
- (예시: Main/ Init: 최초 커밋 추가)

### [branch 명]/Feat

- 새로운 기능 구현시에 사용합니다.
- (예시: Devs_add/ Feat: 덧셈 로직 추가)

### [branch 명]/Fix

- 기존 기능에 대한 버그 픽스나 개선시에 사용합니다.
- (예시: Devs_add/ Fix: 덧셈 로직 수정)

### [branch 명]/Struct

- 프로젝트 구조 변경시에 사용합니다.
- (예시: Main/ Struct: 프로젝트 구조 변경)

### [branch 명]/PR

- 상위 branch에 pull request를 보내기 위합니다.
- (예시: Devs_add/ PR: 덧셈 기능 개발)

### [branch 명]/Merge

- 요청 받은 PR를 병합하기 위합니다.
- (예시: Dev/ Merge: Devs_add -> Dev로의 병합(덧셈 기능))
  <br>

# 📑 Git Commit 예시입니다.

- [branch 명칭]/ [Commit 타입]: Commit 내용을 한번에 나타낼 수 있는 제목
- [Commit 상세 내용]
  <br>

# 📁 구현시에 사용한 라이브러리 리스트입니다. 프로젝트 생성시 사용한 라이브러리는 기술하지 않습니다.

### styled-component

- UI/UX를 구현하기 위한 모듈입니다.

### react-router-dom

- router 기반으로 컴포넌트를 로드하기 위한 모듈입니다.

### react-icons

- react에서 제공하는 아이콘을 사용하기 위한 모듈입니다.
