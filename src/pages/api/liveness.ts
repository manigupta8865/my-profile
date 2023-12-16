export default function liveness(_: any, res: { status: any; json?: jest.Mock<any, any, any> }) {
  res.status(200).json({ status: 'ok' });
}
