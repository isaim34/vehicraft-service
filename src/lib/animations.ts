
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const stagger = (delay = 0.1) => ({
  animate: {
    transition: {
      staggerChildren: delay
    }
  }
});

export function getStaggeredChildren(count: number, baseDelay = 0.05) {
  return Array.from({ length: count }).map((_, i) => ({
    style: { '--index': i } as React.CSSProperties
  }));
}
