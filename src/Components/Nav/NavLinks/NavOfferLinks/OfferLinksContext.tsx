// import {
//   createContext,
//   Dispatch,
//   FC,
//   ReactNode,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { fetchOfferLinks } from "./OfferLinksFetcher";
//
// export type OfferLink = {
//   __typename?: "Oferta";
//   title?: string | null;
//   slug?: string | null;
// };
//
// type OfferLinkContextState = {
//   value: OfferLink[];
//   setValue: Dispatch<SetStateAction<OfferLink[]>>;
// };
//
// const OfferLinkContext = createContext<OfferLinkContextState | undefined>(
//   undefined,
// );
//
// export const OfferLinksProvider: FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [value, setValue] = useState<OfferLink[]>([]);
//
//   useEffect(() => {
//     const getOfferLinks = async () => {
//       const links = await fetchOfferLinks();
//       setValue(links);
//     };
//
//     getOfferLinks();
//   }, []);
//   return (
//     <OfferLinkContext.Provider value={{ value, setValue }}>
//       {children}
//     </OfferLinkContext.Provider>
//   );
// };
//
// export const useOfferLinkContext = () => {
//   const context = useContext(OfferLinkContext);
//   if (!context) {
//     throw new Error("błąd");
//   }
//   return context;
// };
