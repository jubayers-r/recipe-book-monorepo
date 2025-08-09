import React, { Suspense } from "react";
import ComponentLoadingSpinner from "./ComponentLoadingSpinner"; // your DaisyUI spinner

/**
 * Wraps a lazy-loaded component with Suspense and a fallback loader.
 * @param {React.LazyExoticComponent} LazyComponent - The lazy-loaded component.
 * @returns React component with Suspense and fallback.
 */
export default function LazyLoader({ component: LazyComponent }) {
  return (
    <Suspense fallback={<ComponentLoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}