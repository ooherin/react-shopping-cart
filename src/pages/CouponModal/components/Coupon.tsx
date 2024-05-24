import CheckBox from "@/components/_common/CheckBox/CheckBox";
import * as S from "./Coupon.style";
import TextBox from "@/components/_common/TextBox/TextBox";
import { Coupon } from "@/types/coupon";
import { formatToWon } from "@/utils/stringHelper";

const CouponItem = ({
  coupon,
  disabled = true,
}: {
  coupon: Coupon;
  disabled: boolean;
}) => {
  const { description, expirationDate, minimumAmount } = coupon;

  return (
    <S.Wrapper disabled={disabled}>
      <S.BorderLine />
      <S.FlexBox>
        <CheckBox isChecked={false} onClick={() => {}} />
        <TextBox text={description} type="small" />
      </S.FlexBox>
      <TextBox
        type="xSmall"
        text={`만료일: ${expirationDate}`}
        style={{ paddingTop: "3px" }}
      />
      {minimumAmount && (
        <TextBox
          type="xSmall"
          text={`최소 주문 금액: ${formatToWon(minimumAmount)}`}
        />
      )}
    </S.Wrapper>
  );
};

export default CouponItem;
