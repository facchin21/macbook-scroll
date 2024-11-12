export const Row = ({
    children
}) => {
    return (
        (<div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
            {children}
        </div>)
    );
};