export default function Herotext() {
    return (
        <div className=" xl:grid xl:grid-cols-6 ">
            <div className="text-white text-center flex flex-col justify-center items-center font-Inter max-w-[400px] md:max-w-none md:items-start md:text-left m-auto gap-5 col-start-[1] col-end-[4] row-start-1 row-end-2 md:mt-64 md:ml-[20%] sm:ml-[5%]">
                <h1 className=" text-[22px] font-bold md:text-[40px] md:leading-normal">Data infrastructure for web3</h1>
                <p className="text-[13px] my-[10px] md:text-lg md:max-w-2xl">Airstack APIs enable easy querying across projects and blockchains  — powering a new world of data-aware experiences.</p>
                <button className="bg-[#de5c5f] text-xs px-5 py-3 w-fit rounded-lg md:text-[18px] md:px-[50px] md:py-[15px] leading-5 font-normal">
                    Learn More
                </button>
            </div>
            <div className=" col-start-[-1] col-end-[-5] row-start-1 row-end-2">
                <img src={'https://uploads-ssl.webflow.com/625f12b8c305bac86b872acd/63369d0c7172a1028f72c594_Frame%203489.png'} alt="" />
            </div>
        </div>
    )
}