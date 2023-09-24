import { Icon, IconType } from "@/components/ui";

export default function Features() {
  const data = {
    features: [
      {
        title: "Track your bills and subscription",
        description: "See what's due soon at a glance.",
        icon: "bar-chart-x",
      },
      {
        title: "View your payment history",
        description:
          "See your payment history to see how much progress you've made.",
        icon: "history",
      },
      {
        title: "Avoid late payments with reminders",
        description:
          "No one likes making late payments. Get reminded when the due date is near.",
        icon: "bell",
      },
    ],
  };

  return (
    <div className="mt-8 w-full rounded-lg bg-slate-100 px-8 py-16">
      <section>
        <article className="mb-6">
          <h2 className="text-center text-3xl font-medium text-slate-950">
            Features
          </h2>
          <p className="mt-3 text-center text-slate-500">
            Here are some of the features Vortex offers.
          </p>
        </article>
        <ul className="grid gap-6 sm:grid-flow-row md:grid-cols-3">
          {data.features.map((feature) => {
            return (
              <li
                key={feature.title}
                className="rounded-md bg-white/70 p-6 ring-1 ring-slate-300"
              >
                <span className="inline-block rounded-full bg-slate-950 p-2 text-white">
                  <Icon
                    icon={feature.icon as IconType}
                    width={20}
                    height={20}
                  />
                </span>
                <article>
                  <h3 className="mb-2 mt-3 font-medium">{feature.title}</h3>
                  <p className="text-sm text-slate-500/80">
                    {feature.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
