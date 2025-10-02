function AnimatedCard({ children, delay = "0s", className = "" }) {
  return (
    <div
      className={`animate-scale-in ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );

  <AnimatedCard key={form.id} delay={`${0.1 * (index + 1)}s`}>
    <button
      onClick={() => {}}
      className={`w-full bg-white p-6 rounded-xl shadow-lg border border-slate-200 text-left cursor-pointer transition-all duration-300 ease-in-out transform hover:translate-y-[-4px] hover:shadow-2xl hover:scale-[1.01] hover:border-[${SECONDARY}] focus:outline-none focus:ring-2 focus:ring-[${SECONDARY}] focus:ring-opacity-50`}
    >
      {/* FormCardHeader equivalent */}
      <div className='flex items-start gap-4 mb-4'>
        {/* FormIcon equivalent */}
        <div
          className='w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0'
          style={{ backgroundColor: form.bg || PRIMARY }}
        >
          <form.icon size={28} />
        </div>
        <div>
          {/* FormTitle equivalent */}
          <h3 className={`text-xl font-semibold text-[${TEXT}] mb-1`}>
            {form.title}
          </h3>
          {/* FormDescription equivalent */}
          <p className={`text-sm text-[${LABEL}] leading-relaxed`}>
            {form.description}
          </p>
        </div>
      </div>

      {/* FormFooter equivalent */}
      <div
        className={`flex items-center justify-between mt-4 pt-4 border-t border-[${BORDER}]`}
      >
        {/* FormMeta equivalent */}
        <span className={`text-xs text-[${LABEL}]`}>
          {form.clientCount} clients • Last used {form.lastUsed}
        </span>

        {/* ActionButton equivalent */}
        <button
          className={`flex items-center bg-[${SECONDARY}] text-white border-none py-2 px-4 rounded-lg text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[${PRIMARY}] hover:scale-[1.05] shadow-md`}
        >
          <Plus size={16} className='mr-1' />
          New
        </button>
      </div>
    </button>
  </AnimatedCard>;
}

export default AnimatedCard;
