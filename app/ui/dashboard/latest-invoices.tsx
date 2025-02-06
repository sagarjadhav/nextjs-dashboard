import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="bg-white px-6">
          {latestInvoices?.length > 0 ? (
            latestInvoices.map((invoice, i) => (
              <div
                key={invoice.id || i}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  i !== 0 && "border-t"
                )}
              >
                {/* Left Section - User Info */}
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    {invoice.email && (
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {invoice.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Section - Invoice Amount */}
                <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                  {invoice.amount}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 py-4 text-center">No invoices available.</p>
          )}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
