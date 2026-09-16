type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}