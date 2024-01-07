import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import Image from 'next/image'

const  HomePage = async() => {
  const products=await getProducts({isFeatured: true});
  const billbaord=await getBillboard("a136353b-ecb6-4a8a-8a30-becc5c876637");

  return (
    <Container>
      <div className="space-y-10 pb-10" >
     <Billboard data={billbaord}/>

    </div>
   <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
    < ProductList title="Featured Products" items={products}/>

   </div>

    </Container>
  );
}

export default HomePage;