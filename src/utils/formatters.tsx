import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { isStringValid } from './validators';

export function formatDataTestId(prefix: string | null = '', dataTestId: string | null = '') {
  const previousString = isStringValid(prefix) ? `${prefix}-` : '';
  const testId = isStringValid(dataTestId) ? dataTestId : '';
  return `${previousString}${testId}`;
}

export function stringManipulation(str = '' as string | undefined) {
  return str
    ?.split('-')
    .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function objectToArrayConverter(navLinks: { [x: string]: object }) {
  return Object.keys(navLinks).map((key) => {
    return { id: key, ...navLinks[key] };
  });
}

export const sanitizeHtml = (content: string) => {
  return parse(DOMPurify.sanitize(content));
};
