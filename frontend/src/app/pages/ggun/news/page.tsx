import Header from "@/components/common/module/ggun/main/header";
import AllMagerNews from "@/components/common/module/ggun/newsCom/allMagerNews/allMagerNews";
import Hotnews from "@/components/common/module/ggun/newsCom/hotnews/hotnews";
import MajorNews from "@/components/common/module/ggun/newsCom/magerNews/majorNews";
import ResentNews from "@/components/common/module/ggun/newsCom/resentNews/resentNews";
import UpNews from "@/components/common/module/ggun/newsCom/upnews/upnews";




export default function News(){
    return(<>
    <Header></Header>
    <div className=" flex items-center flex-col justify-center">
    <MajorNews></MajorNews>
    <Hotnews></Hotnews>
    <UpNews></UpNews>
    <ResentNews></ResentNews>
    <AllMagerNews></AllMagerNews>
    </div>
    </>)
}