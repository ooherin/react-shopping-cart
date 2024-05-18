import { useRecoilValue } from "recoil";
import { totalItemOrderCountSelector } from "@/recoil/orderInformation";

import Caption from "@/components/_common/Caption/Caption";
import CheckBox from "@/components/_common/CheckBox/CheckBox";
import TitleSet from "@/components/_common/TitleSet/TitleSet";

import PriceSection from "@/components/PriceSection/PriceSection";
import MoreInfo from "@/assets/more-info.svg?react";

import * as S from "./CartPage.style";
import { CART_PAGE_MESSAGES, CART_PAGE_TITLES } from "@/constants/cart";
import ProductList from "@/components/ProductList/ProductList";
import OrderConfirmButton from "@/components/OrderConfirmButton/OrderConfirmButton";
import useSelectAll from "@/hooks/useSelectAll";
import { cartItems } from "@/recoil/cartItems";
import CartEmpty from "@/components/CartEmpty/CartEmpty";

const CartPage = () => {
  const { isAllItemSelected, selectAllItem, unselectAllItem } = useSelectAll();
  const selectedItems = useRecoilValue(totalItemOrderCountSelector);
  const cartItemList = useRecoilValue(cartItems);

  return (
    <>
      {cartItemList.length ? (
        <>
          <S.CartPageLayout>
            <TitleSet
              title={CART_PAGE_TITLES.cart}
              subTitle={CART_PAGE_MESSAGES.itemCount(cartItemList.length)}
            />
            <S.CheckBoxWrapper>
              <CheckBox
                isChecked={isAllItemSelected}
                onClick={isAllItemSelected ? unselectAllItem : selectAllItem}
              />
              <Caption text={CART_PAGE_TITLES.selectAll} />
            </S.CheckBoxWrapper>
            <ProductList />
            <Caption
              asset={() => <MoreInfo />}
              text={CART_PAGE_MESSAGES.freeShippingInfo}
            />
            <PriceSection />
          </S.CartPageLayout>
        </>
      ) : (
        <S.CartPageLayout>
          <CartEmpty />
        </S.CartPageLayout>
      )}
      <OrderConfirmButton disabled={!selectedItems} />
    </>
  );
};

export default CartPage;
