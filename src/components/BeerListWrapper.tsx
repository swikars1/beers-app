export function BeerListWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[60px] grid grid-cols-1 gap-3 p-4 lg:sm:gap-6 lg:sm:p-10 lg:sm:grid-cols-2">
      {children}
    </div>
  );
}
