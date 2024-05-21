import { Modal } from "rian-modal-component";
import MoreInfo from "@/components/_common/MoreInfo/MoreInfo";
import { CART_PAGE_MESSAGES } from "@/constants/cart";
import TextBox from "@/components/_common/TextBox/TextBox";
import * as S from "./CouponModal.style";
import DeleteButton from "@/assets/delete-icon.svg?react";
import { mockCoupons } from "@/mocks/coupons";
import { Coupon } from "@/types/coupon";
import CouponItem from "./components/Coupon";

const CouponModal = ({
  isOpen,
  onCloseModal,
}: {
  isOpen: boolean;
  onCloseModal: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      position="center"
      onClose={onCloseModal}
      size="medium"
      contentPosition="center"
    >
      <TextBox
        type="medium"
        text={CART_PAGE_MESSAGES.choiceCoupon}
        style={{ paddingBottom: "20px" }}
      />
      <S.Wrapper>
        <MoreInfo text={CART_PAGE_MESSAGES.couponLimit} />
        <Modal.CloseIcon onClick={onCloseModal}>
          <DeleteButton />
        </Modal.CloseIcon>

        {mockCoupons.map((coupon: Coupon) => {
          return (
            <>
              <CouponItem coupon={coupon} />
            </>
          );
        })}
      </S.Wrapper>
    </Modal>
  );
};

export default CouponModal;
