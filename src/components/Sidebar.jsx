const Sidebar=({selectedTab,setSelectedTab})=>
{


    const handleOnClick=(tabName)=>{
      setSelectedTab(tabName);
    }

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "200px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" previewlistener="true">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Niranjan Alase</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>{handleOnClick("Home")}}>
        <a href="#" className={`nav-link  text-white ${selectedTab==='Home' && 'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={()=>{handleOnClick("CreatePost")}}>
        <a href="#" className={`nav-link  text-white ${selectedTab==='CreatePost' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          CreatePost
        </a>
      </li>
      <li onClick={()=>{handleOnClick("Notification")}}>
         <a href="#" className={`nav-link  text-white ${selectedTab==='Notification' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Notification
        </a>
      </li>
      <li onClick={()=>{handleOnClick("Friends")}}>
        <a href="#" className={`nav-link  text-white ${selectedTab==='Friends' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
          Friends
        </a>
      </li>
      <li onClick={()=>{handleOnClick("Settings")}}>
        <a href="#" className={`nav-link  text-white ${selectedTab==='Settings' && 'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
          Settings
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Niranjan</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    )


    
}

export default Sidebar;