function Auth() {
  return (
    <div className="bg-[url('/images/hero.jpg')] relative h-full w-full bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full bg-black/50">
        <nav className="px-12 py-6">
          <img src="/images/logo.svg" alt="logo" className="h-9" />
        </nav>
        <div className="flex items-center bg-black/70 px-16 py-8 md:w-2/5 lg:max-w-md rounded-md mx-auto">
          <div className="text-white text-4xl font-bold mb-8">Sign In</div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
