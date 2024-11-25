import mongodbIcon from '@/assets/mongodb.svg'
import nextIcon from '@/assets/nextjs.svg'
import nodeIcon from '@/assets/nodejs.svg'
import postgresqlIcon from '@/assets/postgresql.svg'
import focalPoint from '@/assets/projects/focal-point.png'
import orderManager from '@/assets/projects/order-manager.jpg'
import rsa from '@/assets/projects/rsa.png'
import reactIcon from '@/assets/reactjs.svg'

export const projectsArray = [
  {
    title: 'RSA',
    description:
      'Plataforma para operadores de apostas esportivas e cassino online no Brasil.',
    image: rsa,
    techs: [nodeIcon, reactIcon, nextIcon, postgresqlIcon, mongodbIcon],
    url: 'https://rsa.bet',
  },
  {
    title: 'PayRadar',
    description:
      'Gateway de pagamento para prestação de serviços de Facilitação de Pagamentos (eFX), para depósitos e retiradas de valores, facilitando compras online em sites nacionais e internacionais.',
    image: focalPoint,
    techs: [nodeIcon, reactIcon, nextIcon, mongodbIcon],
    url: 'https://payradar.vercel.app',
  },
  {
    title: 'Order Manager',
    description:
      'Gerenciador de pedidos para restaurantes, permite a criação, visualização, atualização e exclusão de pedidos. Oferecendo uma interface amigável e intuitiva.',
    image: orderManager,
    techs: [nodeIcon, reactIcon, nextIcon, mongodbIcon],
    url: '#',
  },
  {
    title: 'Focal Point',
    description:
      'O gerenciador de tarefas permite a criação, visualização, atualização e exclusão de tarefas. Oferecendo uma interface amigável e intuitiva.',
    image: focalPoint,
    url: 'https://focal-point-mu.vercel.app',
  },
]
