import { SEO } from '../components/SEO'
import { ServiceCards } from '../sections/services/ServiceCards'
import { ProcessSteps } from '../sections/services/ProcessSteps'
import { FAQ } from '../sections/services/FAQ'
import { ServicesCTA } from '../sections/services/ServicesCTA'

export const ServicesPage = () => {
  return (
    <>
      <SEO pageKey="services" />
      <ServiceCards />
      <ProcessSteps />
      <FAQ />
      <ServicesCTA />
    </>
  )
}
