import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Extend Vitest's expect method with methods from react-testing-library
// expect.extend(matchers);

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});
