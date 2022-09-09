import {Brewery} from 'types/Brewery';

export interface DetailsPublicProps {}
export interface DetailsPrivateProps {
  details: Brewery;
}
export interface DetailsProps extends DetailsPublicProps, DetailsPrivateProps {}
