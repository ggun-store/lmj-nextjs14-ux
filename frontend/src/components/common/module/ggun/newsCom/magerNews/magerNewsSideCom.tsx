import NewImageCom from "../newsImageCom";

export default function MajorNewsSideCom({text,back}:any) {
    return (<>
        <a href="#" className="flex flex-row w-[20rem]">
            <h2 className="w-[15rem] h-[5rem]">{text}</h2>
            <div className="flex flex-col">
                <div className="overflow-hidden w-[5rem] h-[5rem] rounded-[16px]">
                <NewImageCom width="w-[5rem]" high="h-[5rem]" back={back} />
                </div>
            </div>
        </a>
    </>)
}