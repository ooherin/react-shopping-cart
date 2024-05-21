import { useRecoilState, useSetRecoilState } from "recoil";
import useUpdateItemQuantity from "@/hooks/useUpdateItemQuantity";

import Button from "../_common/Button/Button";
import CheckBox from "../_common/CheckBox/CheckBox";

import MinusButton from "@/assets/minus-button.svg?react";
import PlusButton from "@/assets/plus-button.svg?react";

import { CartItem } from "@/types/cart";

import * as S from "./ProductItem.style";

import { cartItems } from "@/recoil/cartItems";
import { formatToWon } from "@/utils/stringHelper";
import { selectedCartItemsIdState } from "@/recoil/selectedCardItems";
import { removeCartItem } from "@/auth/apis/cart";
import TextBox from "../_common/TextBox/TextBox";

export type CartItemShowType = "readonly" | "edit";

const ProductItem = ({
  item,
  type = "edit",
}: {
  item: CartItem;
  type: CartItemShowType;
}) => {
  const { product, id } = item;
  const { name, imageUrl, price } = product;

  const { quantity, handleIncreaseQuantity, handleDecreaseQuantity } =
    useUpdateItemQuantity(id);
  const [selectItems, setSelectItems] = useRecoilState(
    selectedCartItemsIdState
  );

  const isItemSelected = selectItems.includes(id);
  const setCartItemList = useSetRecoilState(cartItems);

  const onClickRemoveItem = async () => {
    const canRemoveItem = await removeCartItem(id);

    if (canRemoveItem) {
      setCartItemList((prevCartItems) => {
        return prevCartItems.filter((item) => item.id !== id);
      });
    }
  };

  const onClickCheckBox = isItemSelected
    ? () => setSelectItems((prev) => prev.filter((id) => id !== id))
    : () => setSelectItems((prev) => [...prev, id]);

  return (
    <S.ItemWrapper type={type}>
      {type === "edit" && (
        <S.ItemButtonWrapper>
          <CheckBox
            id={`check-box-${id}`}
            isChecked={isItemSelected}
            onClick={onClickCheckBox}
          />
          <Button
            width="fit"
            size="small"
            radiusVariant="rounded"
            onClick={onClickRemoveItem}
          >
            <TextBox type="caption" text="삭제" />
          </Button>
        </S.ItemButtonWrapper>
      )}

      <S.ItemInfoBox>
        <S.ItemImgBox $imageUrl={imageUrl} />

        <S.ItemInfoTextBox>
          <S.FlexBox>
            <TextBox type="caption" text={name} />
            <TextBox type="title" text={formatToWon(price)} />
          </S.FlexBox>
          {type === "edit" && (
            <S.UpdateButtonWrapper>
              <MinusButton onClick={handleDecreaseQuantity} />
              <S.ProductQuantity>{quantity}</S.ProductQuantity>
              <PlusButton onClick={handleIncreaseQuantity} />
            </S.UpdateButtonWrapper>
          )}
          <S.ProductQuantity>{quantity}개</S.ProductQuantity>
        </S.ItemInfoTextBox>
      </S.ItemInfoBox>
    </S.ItemWrapper>
  );
};

export default ProductItem;
