# react-shopping-cart

### 🔑 키워드

State Management, Recoil, RTL, API

### 📍 학습 목표

✔️ Recoil을 사용하여 클라이언트 상태를 관리할 수 있다.

✔️ 상태 관리 라이브러리가 왜 이렇게 짜졌는지 이해할 수 있다.

✔️ React Testing Library(RTL)를 활용하여 주요 기능에 대한 테스트를 작성할 수 있다.

### 🎯 기능 요구 사항

- [x] `/cart-items` API를 호출하여 장바구니 상품 데이터를 불러온다.

- [x] 불러온 데이터를 기반으로 Recoil을 사용하여 클라이언트 상태를 관리한다.

- [x] 개별 상품의 선택 여부, 결제 금액, 배송비 등의 상태를 Recoil로 관리한다.

- [x] 상품 선택에 따른 결제 금액, 배송비 등의 동적인 변경 사항을 처리한다.

- [x] 상품 선택/해제 시 결제 금액을 동적으로 변경한다.

- [x] 결제 금액이 10만원 이상일 경우 배송비는 무료이다.

- [x] 장바구니 상품의 수량 변경을 할 수 있다.

- [x] 장바구니에 담긴 상품을 제거할 수 있다.

- [ ] 새로고침해도 선택한 상품 상태를 유지해서 보여준다.

✅ 프로그래밍 요구사항

이전 미션의 프로그래밍 요구사항은 기본으로 포함한다.

- [x] Recoil을 사용하여 장바구니의 상태를 관리한다.

- [x] 장바구니 상품의 다양한 상태를 Atom으로 관리한다.

- [x] 결제 금액, 배송비 등의 파생 상태를 Selector를 통해 계산한다.

- [x] `/cart-items` API를 호출하여 장바구니 데이터를 불러온다. 자세한 API 스펙은 링크를 참고한다.

- [x] 장바구니의 상태를 스토리지에 저장하여 새로고침 시에도 유지되도록 한다.

### TEST

e.g.

- [x] 장바구니 데이터 로딩: /cart-items API 호출을 통해 초기 장바구니 데이터를 정상적으로 불러오는지 테스트한다.

- [x] 상품 선택 기능: 개별 상품의 선택/해제 시 선택 여부가 정상적으로 변경되는지 테스트한다.

- [x] 결제 금액 계산: 선택된 상품들의 가격 합계가 결제 금액으로 정상 반영되는지 테스트한다.

- [x] 배송비 계산: 결제 금액에 따라 배송비가 정상적으로 계산되는지 (10만원 이상 무료) 테스트한다.

- [x] 수량 변경 기능: 상품의 수량을 변경할 때 올바르게 반영되는지 테스트한다.
- [x] 상품 제거 기능: 장바구니에서 상품을 제거할 때 정상적으로 동작하는지 테스트한다.
