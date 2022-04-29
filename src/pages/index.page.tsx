import { FeaturedProducts, Header } from '@src/components';
import { productsActions } from '@src/store/modules/products';
import { Product } from '@src/store/modules/products/products.types';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('home');

    const products: Array<Product> = [
      {
        id: 0,
        name: 'Produto 1',
        description: 'Descrição produto 1',
        image: {
          alt: 'Imagem do produto 1',
          src: ''
        },
        price: 10,
        featured: true,
      },
      {
        id: 1,
        name: 'Produto 2',
        description: 'Descrição produto 2',
        image: {
          alt: 'Imagem do produto 2',
          src: ''
        },
        price: 20,
        featured: true,
      }
    ];

    dispatch(productsActions.setProducts(products));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <FeaturedProducts />
      </main>
      <footer>
        <p>Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Home;
