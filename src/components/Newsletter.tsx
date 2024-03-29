import { Button } from '@/components/Button';
import { MailIcon } from '@/components/Icons';

function Newsletter() {
  return (
    <div className="group relative">
      <div className=" absolute -inset-px animate-pulse rounded-2xl bg-amber-600 blur-md transition duration-1000 group-hover:-inset-1 group-hover:animate-none group-hover:opacity-100 group-hover:duration-1000"></div>
      <form
        action="/thank-you"
        className="dark: relative h-full w-full rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-700/40 dark:bg-zinc-900"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-amber-400 dark:focus:ring-amber-400/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none">
            Join
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
