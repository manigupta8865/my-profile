export const useRouter = () => ({
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  prefetch: jest.fn(),
  pathname: '/',
});
