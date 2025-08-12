// app/components/sidebar/user-profile.jsx
import Image from 'next/image';

/**
 * Mostra a foto de perfil, nome e cargo do utilizador.
 * @param {object} props
 * @param {string} props.name - O nome do utilizador.
 * @param {string} props.role - O cargo ou função do utilizador.
 * @param {string} props.imageUrl - A URL da imagem de perfil.
 */

const  UserProfile = () => {
  return (
    <div className='flex items-center space-x-4 lg:p-4'>
      <Image
        src={'/images/profile.png'}
        alt={`Avatar de Julano Santos`}
        width={48}
        height={48}
        className='rounded-full object-cover'
      />
      <div>
        <p className='font-semibold text-foreground'>Juliano Santos</p>
        <p className='text-sm text-muted-foreground'>FullStack developer</p>
      </div>
    </div>
  );
}

export { UserProfile }