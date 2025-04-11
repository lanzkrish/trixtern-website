interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    // <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center">
    //   <h1 className="text-4xl font-bold text-blue-700">{title}</h1>
    //   <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
    //     {description}
    //   </p>
    // </section>
    <section className="py-20 px-6 bg-white text-center">
      {/* <h1 className="text-4xl font-bold text-gray-700">{title}</h1> */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(40deg, rgb(73, 225, 225), rgb(31, 87, 171), rgb(233, 134, 151), rgba(255, 0, 0, 0.467), orange)",
              }}
            >
             {title}
            </span>
          </h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
        {description}
      </p>
    </section>
  );
}