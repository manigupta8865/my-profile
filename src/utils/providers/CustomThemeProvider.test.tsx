import { render, screen } from '@testing-library/react';
import { CustomThemeProvider } from './CustomThemeProvider';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '~components/atoms/theme';

jest.mock('../store/appDataContext', () => ({
  useAppData: jest.fn(),
}));

const mockUseQueryRequest = jest.requireMock('../store/appDataContext') as {
  useAppData: jest.Mock;
};
describe('Customthemeprovider', () => {
  it('should render the custom theme provider', () => {
    mockUseQueryRequest.useAppData.mockReturnValue({ restaurantBrandName: 'beefeater' });
    render(
      <CustomThemeProvider>
        <ChakraProvider theme={theme}>
          <h3>tabletable</h3>
        </ChakraProvider>
      </CustomThemeProvider>
    );
    const element = screen.getByText(/tabletable/i);
    expect(element);
  });
});
