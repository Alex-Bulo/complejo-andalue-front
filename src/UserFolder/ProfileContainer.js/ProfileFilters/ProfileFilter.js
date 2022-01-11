
import './ProfileFilter.css'


function ProfileFilter({filter, pickFilter}) {

    return (
        <div className={`ProfileFilter ${filter.status? 'activeFilter' : ''}`} onClick={()=>pickFilter({...filter, status:true})}>
                <p className='filter-content'>{filter.description}</p>
        </div>


    );
}



export default ProfileFilter;