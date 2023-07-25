export default function Banner() {
    return (
        <div className="flex py-[20px] px-[35px]">
            <div className="text-white font-bold text-[20px] text-center flex items-center" style={
                {
                    height: "250px",
                    width: "150px",
                    borderRadius: "10px",
                    border: "1px solid black",
                    backgroundImage: "url('https://pbs.twimg.com/media/FtU_lPoXoAI81Ht?format=jpg&name=900x900')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0px 0px 0px 200px rgba(0, 0, 0, 0.65) inset"

                }
            }>
                <p>
                    Komik Terpopuler Minggu Ini
                </p>
            </div>
            <div></div>
        </div>
    )
}