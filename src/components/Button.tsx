
function Button({ label, onClick }: { label: string; onClick: () => void }) {

    return (
        <>
            <div
                onClick={onClick}
                className="cursor-default hover:scale-105 active:scale-95 transition-all bg-[#0ead88] max-sm:p-2 text-sm p-3 rounded-[15px] text-white w-fit">
                {label}
            </div>
        </>
    )
}

export default Button