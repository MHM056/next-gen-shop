export default function IconWithBadge({ icon, count = 0 }) {

    <div className="relative group cursor-pointer text-white transition-colors duration-300 hover:text-[#00F0FF]">
        <i className={icon}></i>
        {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#00F0FF] text-xs text-black rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {count}
            </span>
        )}
    </div>
}
