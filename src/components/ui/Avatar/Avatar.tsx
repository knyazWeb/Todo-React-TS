import avatarIMG from './Avatar.jpg'



type AvatarProps = {
  size?: string;
}


const Avatar = ({size}: AvatarProps) => {
  
  return (
    <div className={`${size ? size : 'w-14 h-14'}`}>
      <img className="rounded-full" src={avatarIMG} alt="Avatar" />
    </div>
  );
}

export default Avatar