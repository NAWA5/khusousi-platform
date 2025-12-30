export default function Hero() {
  const heroImage = 'https://source.unsplash.com/1600x900/?education,classroom,students';
  return (
    <section
      className="rounded-lg overflow-hidden relative text-white"
      aria-label="الهيرُو"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-40 p-8">
        <div className="container">
          <h1 className="text-3xl font-bold">تعلم بطريقة سهلة وممتعة</h1>
          <p className="mt-2 max-w-xl">
            اعثر على الدورات المناسبة لك وابدأ التعلم الآن — محتوى عربي وتصميم مريح للقراءة من اليمين لليسار.
          </p>
        </div>
      </div>
    </section>
  );
}