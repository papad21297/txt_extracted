import { FC } from "react";

interface productDetailProps {
  params: { productId: string }
}

const productDetail: FC<productDetailProps> = ({params}) => {
  return (
    <>
      <span style={{
        fontSize: '72px',
        fontWeight: 700
      }}>Product Detail page of {
        params.productId
      }</span>
    </>
  )
}

export default productDetail;