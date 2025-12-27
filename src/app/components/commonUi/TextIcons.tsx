
const TextIcons = (props:any)=>{
    const {url,title} = props
    return(<h1 className=" flex items-center" >
        <img src={url} width={18} height={18} alt={title} className="mr-2" /> <span>{title}</span></h1>)
}

export default TextIcons;