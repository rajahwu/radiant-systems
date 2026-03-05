import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-slate-900 dark:text-slate-100">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-4 mb-2 text-slate-800 dark:text-slate-200">{children}</h3>,
    p: ({ children }) => <p className="leading-relaxed mb-4 text-slate-700 dark:text-slate-300">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-slate-700 dark:text-slate-300">{children}</ol>,
    li: ({ children }) => <li className="pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 py-2 pr-2 rounded-r">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 dark:bg-slate-800 rounded px-1.5 py-0.5 text-sm font-mono text-pink-600 dark:text-pink-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-4 border border-slate-800">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
        {children}
      </a>
    ),
    ...components,
  };
}
