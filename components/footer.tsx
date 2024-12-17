const YEAR = new Date().getFullYear();

export const Footer = (): React.ReactElement => {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium">OpenDeepLearning</p>
          <p className="text-xs">Copyright © {YEAR}</p>
        </div>
      </div>
    </footer>
  );
};
