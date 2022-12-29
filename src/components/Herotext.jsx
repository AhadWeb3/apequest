export default function Herotext() {
    return (
        <div className=" md:flex ">
            <div className="text-white text-center flex flex-col justify-center items-center font-Inter max-w-[400px] m-auto gap-5 ">
                <h1 className=" text-[22px] font-bold md:text-[40px]">Data infrastructure for web3</h1>
                <p className="text-[13px] my-[10px] md:text-2xl">Airstack APIs enable easy querying across projects and blockchains  — powering a new world of data-aware experiences.</p>
                <button className="bg-[#de5c5f] text-xs px-5 py-3 w-fit rounded-lg mt-[-10px]">
                    Learn More
                </button>
            </div>
            <div className=" w-[60%]">
                <img src={'https://uploads-ssl.webflow.com/625f12b8c305bac86b872acd/63369d0c7172a1028f72c594_Frame%203489.png'} alt="" />
            </div>
        </div>
    )
}