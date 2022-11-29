/* eslint-disable react/jsx-props-no-spreading */
import { AppliedFilters, ProductGrid, ProductList } from '@/components/product';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from '@/selectors/selector';

const CreateJewel = () => {
  useDocumentTitle('Crea tu Joya | Joyas Sol');
  useScrollTop();

  const createJewel = useSelector((state) => ({
    filteredProducts: selectFilter(state.products.items, state.filter),
    products: state.products,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <AppliedFilters filteredProductsCount={createJewel.filteredProducts.length} />
        <ProductList {...createJewel}>
          <ProductGrid products={createJewel.filteredProducts} />
        </ProductList>
      </section>
    </main>
  );
};

export default CreateJewel;
