import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('<Loader />', () => {
    test('loader img should render', () => {
        render(<Loader />);
        const loaderElement = screen.getByRole('img', { name: /pokeball loader/i });
        expect(loaderElement).toBeInTheDocument();
      });
})