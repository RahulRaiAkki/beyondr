/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  name: string;
  userid: string;
  email: string;
  awsdate: string;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  userid?: ModelIDInput | null;
  email?: ModelStringInput | null;
  awsdate?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type User = {
  __typename: "User";
  id?: string;
  name?: string;
  userid?: string;
  email?: string;
  message?: ModelMessageConnection;
  awsdate?: string;
  appointment?: ModelAppointmentConnection;
  userdatabase?: ModelUserDatabaseConnection;
  doctor?: ModelDoctorConnection;
  post?: ModelPostConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items?: Array<Message | null> | null;
  nextToken?: string | null;
};

export type Message = {
  __typename: "Message";
  id?: string;
  DoctorsID?: string;
  UserID?: string;
  messagetype?: MessageType;
  content?: string | null;
  currentmessage?: string;
  readbydoctor?: boolean;
  imageboolean?: boolean;
  readbyuser?: boolean;
  date?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export enum MessageType {
  IMAGE = "IMAGE",
  TEXT = "TEXT"
}

export type ModelAppointmentConnection = {
  __typename: "ModelAppointmentConnection";
  items?: Array<Appointment | null> | null;
  nextToken?: string | null;
};

export type Appointment = {
  __typename: "Appointment";
  id?: string;
  userID?: string;
  doctorID?: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees?: string;
  PaymentCompletionStatus?: PaymentCompletionStatus;
  conultationfesscurrency?: string;
  starttime?: string;
  slottime?: string;
  date?: string;
  meetingid?: string;
  status?: Status;
  request?: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype?: DoctorType;
  createdAt?: string;
  updatedAt?: string;
};

export enum PaymentMode {
  STRIPE = "STRIPE",
  PACKAGE = "PACKAGE",
  BALANCE = "BALANCE"
}

export enum PaymentCompletionStatus {
  PAYMENTCOMPLETED = "PAYMENTCOMPLETED",
  PAYMENTNOTCOMPLETED = "PAYMENTNOTCOMPLETED"
}

export enum Status {
  PENDING = "PENDING",
  DONE = "DONE",
  CANCELLED = "CANCELLED"
}

export enum Request {
  REQUESTED = "REQUESTED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  REJECTED = "REJECTED"
}

export enum DoctorType {
  DOCTOR = "DOCTOR",
  COACH = "COACH"
}

export type ModelUserDatabaseConnection = {
  __typename: "ModelUserDatabaseConnection";
  items?: Array<UserDatabase | null> | null;
  nextToken?: string | null;
};

export type UserDatabase = {
  __typename: "UserDatabase";
  id?: string;
  UserID?: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelDoctorConnection = {
  __typename: "ModelDoctorConnection";
  items?: Array<Doctor | null> | null;
  nextToken?: string | null;
};

export type Doctor = {
  __typename: "Doctor";
  id?: string;
  UserID?: string;
  doctortype?: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut?: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status?: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted?: string;
  viewsonprofile?: string;
  education?: ModelEducationConnection;
  experience?: ModelExperienceConnection;
  certificates?: ModelCertificatesConnection;
  appointment?: ModelAppointmentConnection;
  message?: ModelMessageConnection;
  createdAt?: string;
  updatedAt?: string;
};

export enum DoctorProfileReview {
  UNDERREVIEW = "UNDERREVIEW",
  PUBLISHED = "PUBLISHED",
  SUBMITTED = "SUBMITTED",
  REJECTED = "REJECTED"
}

export type ModelEducationConnection = {
  __typename: "ModelEducationConnection";
  items?: Array<Education | null> | null;
  nextToken?: string | null;
};

export type Education = {
  __typename: "Education";
  id?: string;
  doctorID?: string;
  nameofuniversity?: string;
  fieldofstudy?: string;
  doctortype?: DoctorType;
  degree?: string;
  startdate?: string;
  enddate?: string;
  gradepoint?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelExperienceConnection = {
  __typename: "ModelExperienceConnection";
  items?: Array<Experience | null> | null;
  nextToken?: string | null;
};

export type Experience = {
  __typename: "Experience";
  id?: string;
  doctorID?: string;
  Title?: string;
  CompanyName?: string;
  location?: string;
  doctortype?: DoctorType;
  Description?: string;
  startdate?: string;
  enddate?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCertificatesConnection = {
  __typename: "ModelCertificatesConnection";
  items?: Array<Certificates | null> | null;
  nextToken?: string | null;
};

export type Certificates = {
  __typename: "Certificates";
  id?: string;
  doctorID?: string;
  imageurl?: string;
  description?: string;
  doctortype?: DoctorType;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id?: string;
  UserID?: string;
  postidreference?: string;
  PostType?: PostType;
  title?: string;
  image?: boolean;
  date?: string;
  description?: string;
  numberoflikes?: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: ModelLikesConnection;
  comments?: ModelCommentsConnection;
  createdAt?: string;
  updatedAt?: string;
};

export enum PostType {
  NormalPost = "NormalPost",
  LearningsWellnesPost = "LearningsWellnesPost"
}

export enum VideoType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE"
}

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection";
  items?: Array<Likes | null> | null;
  nextToken?: string | null;
};

export type Likes = {
  __typename: "Likes";
  id?: string;
  PostID?: string;
  date?: string;
  UserId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelCommentsConnection = {
  __typename: "ModelCommentsConnection";
  items?: Array<Comments | null> | null;
  nextToken?: string | null;
};

export type Comments = {
  __typename: "Comments";
  id?: string;
  PostID?: string;
  UserId?: string;
  date?: string;
  comment?: string;
  commentfrom?: UserType;
  createdAt?: string;
  updatedAt?: string;
};

export enum UserType {
  USER = "USER",
  DOCTOR = "DOCTOR",
  COACH = "COACH"
}

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  userid?: string | null;
  email?: string | null;
  awsdate?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type CreateBookMarkInput = {
  id?: string | null;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
};

export enum BookMarkType {
  BROADCAST = "BROADCAST",
  DISCUSSIONGROUP = "DISCUSSIONGROUP"
}

export type ModelBookMarkConditionInput = {
  userid?: ModelIDInput | null;
  bookmarktype?: ModelBookMarkTypeInput | null;
  discussiongroupid?: ModelIDInput | null;
  livebroadcastingid?: ModelIDInput | null;
  and?: Array<ModelBookMarkConditionInput | null> | null;
  or?: Array<ModelBookMarkConditionInput | null> | null;
  not?: ModelBookMarkConditionInput | null;
};

export type ModelBookMarkTypeInput = {
  eq?: BookMarkType | null;
  ne?: BookMarkType | null;
};

export type BookMark = {
  __typename: "BookMark";
  id?: string;
  userid?: string;
  bookmarktype?: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateBookMarkInput = {
  id: string;
  userid?: string | null;
  bookmarktype?: BookMarkType | null;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
};

export type DeleteBookMarkInput = {
  id: string;
};

export type CreatePaymentRequestInput = {
  id?: string | null;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
};

export enum PaymentRequestType {
  PACKAGES = "PACKAGES",
  APPOINTMENT = "APPOINTMENT"
}

export enum PaymenttoDoctor {
  GIVEN = "GIVEN",
  UNDERREVIEW = "UNDERREVIEW"
}

export type ModelPaymentRequestConditionInput = {
  PaymentRequestType?: ModelPaymentRequestTypeInput | null;
  doctorID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  appointmentid?: ModelIDInput | null;
  request?: ModelPaymenttoDoctorInput | null;
  paidtodoctordate?: ModelStringInput | null;
  and?: Array<ModelPaymentRequestConditionInput | null> | null;
  or?: Array<ModelPaymentRequestConditionInput | null> | null;
  not?: ModelPaymentRequestConditionInput | null;
};

export type ModelPaymentRequestTypeInput = {
  eq?: PaymentRequestType | null;
  ne?: PaymentRequestType | null;
};

export type ModelPaymenttoDoctorInput = {
  eq?: PaymenttoDoctor | null;
  ne?: PaymenttoDoctor | null;
};

export type PaymentRequest = {
  __typename: "PaymentRequest";
  id?: string;
  PaymentRequestType?: PaymentRequestType;
  doctorID?: string;
  date?: string;
  appointmentid?: string;
  request?: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePaymentRequestInput = {
  id: string;
  PaymentRequestType?: PaymentRequestType | null;
  doctorID?: string | null;
  date?: string | null;
  appointmentid?: string | null;
  request?: PaymenttoDoctor | null;
  paidtodoctordate?: string | null;
};

export type DeletePaymentRequestInput = {
  id: string;
};

export type CreatePackagesBuyInput = {
  id?: string | null;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
};

export type ModelPackagesBuyConditionInput = {
  doctorID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  numberofappointmentsused?: ModelStringInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  numofappointments?: ModelStringInput | null;
  validity?: ModelStringInput | null;
  date?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  PaymentCompletionStatus?: ModelPaymentCompletionStatusInput | null;
  PaymentMode?: ModelPaymentModeInput | null;
  and?: Array<ModelPackagesBuyConditionInput | null> | null;
  or?: Array<ModelPackagesBuyConditionInput | null> | null;
  not?: ModelPackagesBuyConditionInput | null;
};

export type ModelDoctorTypeInput = {
  eq?: DoctorType | null;
  ne?: DoctorType | null;
};

export type ModelPaymentCompletionStatusInput = {
  eq?: PaymentCompletionStatus | null;
  ne?: PaymentCompletionStatus | null;
};

export type ModelPaymentModeInput = {
  eq?: PaymentMode | null;
  ne?: PaymentMode | null;
};

export type PackagesBuy = {
  __typename: "PackagesBuy";
  id?: string;
  doctorID?: string;
  userID?: string;
  numberofappointmentsused?: string;
  consultationfees?: string;
  conultationfesscurrency?: string;
  numofappointments?: string;
  validity?: string;
  date?: string;
  doctortype?: DoctorType;
  PaymentCompletionStatus?: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePackagesBuyInput = {
  id: string;
  doctorID?: string | null;
  userID?: string | null;
  numberofappointmentsused?: string | null;
  consultationfees?: string | null;
  conultationfesscurrency?: string | null;
  numofappointments?: string | null;
  validity?: string | null;
  date?: string | null;
  doctortype?: DoctorType | null;
  PaymentCompletionStatus?: PaymentCompletionStatus | null;
  PaymentMode?: PaymentMode | null;
};

export type DeletePackagesBuyInput = {
  id: string;
};

export type CreatePackagesInput = {
  id?: string | null;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
};

export type ModelPackagesConditionInput = {
  doctorID?: ModelIDInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  numofappointments?: ModelStringInput | null;
  validity?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelPackagesConditionInput | null> | null;
  or?: Array<ModelPackagesConditionInput | null> | null;
  not?: ModelPackagesConditionInput | null;
};

export type Packages = {
  __typename: "Packages";
  id?: string;
  doctorID?: string;
  consultationfees?: string;
  conultationfesscurrency?: string;
  numofappointments?: string;
  validity?: string;
  doctortype?: DoctorType;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePackagesInput = {
  id: string;
  doctorID?: string | null;
  consultationfees?: string | null;
  conultationfesscurrency?: string | null;
  numofappointments?: string | null;
  validity?: string | null;
  doctortype?: DoctorType | null;
};

export type DeletePackagesInput = {
  id: string;
};

export type CreateBroadCastInput = {
  id?: string | null;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
};

export enum BroadCastStatus {
  LIVE = "LIVE",
  NOTLIVE = "NOTLIVE"
}

export type ModelBroadCastConditionInput = {
  doctorID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  BroadCastStatus?: ModelBroadCastStatusInput | null;
  and?: Array<ModelBroadCastConditionInput | null> | null;
  or?: Array<ModelBroadCastConditionInput | null> | null;
  not?: ModelBroadCastConditionInput | null;
};

export type ModelBroadCastStatusInput = {
  eq?: BroadCastStatus | null;
  ne?: BroadCastStatus | null;
};

export type BroadCast = {
  __typename: "BroadCast";
  id?: string;
  doctorID?: string;
  date?: string;
  name?: string;
  description?: string;
  doctortype?: DoctorType;
  BroadCastStatus?: BroadCastStatus;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateBroadCastInput = {
  id: string;
  doctorID?: string | null;
  date?: string | null;
  name?: string | null;
  description?: string | null;
  doctortype?: DoctorType | null;
  BroadCastStatus?: BroadCastStatus | null;
};

export type DeleteBroadCastInput = {
  id: string;
};

export type CreateCommunitiesInput = {
  id?: string | null;
  communityname: string;
  communityowner: string;
  description: string;
};

export type ModelCommunitiesConditionInput = {
  communityname?: ModelStringInput | null;
  communityowner?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCommunitiesConditionInput | null> | null;
  or?: Array<ModelCommunitiesConditionInput | null> | null;
  not?: ModelCommunitiesConditionInput | null;
};

export type Communities = {
  __typename: "Communities";
  id?: string;
  communityname?: string;
  communityowner?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCommunitiesInput = {
  id: string;
  communityname?: string | null;
  communityowner?: string | null;
  description?: string | null;
};

export type DeleteCommunitiesInput = {
  id: string;
};

export type CreateContactUsInput = {
  id?: string | null;
  userid: string;
  date: string;
  title: string;
  description: string;
};

export type ModelContactUsConditionInput = {
  userid?: ModelIDInput | null;
  date?: ModelStringInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelContactUsConditionInput | null> | null;
  or?: Array<ModelContactUsConditionInput | null> | null;
  not?: ModelContactUsConditionInput | null;
};

export type ContactUs = {
  __typename: "ContactUs";
  id?: string;
  userid?: string;
  date?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateContactUsInput = {
  id: string;
  userid?: string | null;
  date?: string | null;
  title?: string | null;
  description?: string | null;
};

export type DeleteContactUsInput = {
  id: string;
};

export type CreateNotificationsInput = {
  id?: string | null;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
};

export type ModelNotificationsConditionInput = {
  meetingid?: ModelIDInput | null;
  request?: ModelRequestInput | null;
  userid?: ModelIDInput | null;
  date?: ModelStringInput | null;
  doctorid?: ModelIDInput | null;
  and?: Array<ModelNotificationsConditionInput | null> | null;
  or?: Array<ModelNotificationsConditionInput | null> | null;
  not?: ModelNotificationsConditionInput | null;
};

export type ModelRequestInput = {
  eq?: Request | null;
  ne?: Request | null;
};

export type Notifications = {
  __typename: "Notifications";
  id?: string;
  meetingid?: string;
  request?: Request;
  userid?: string;
  date?: string;
  doctorid?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateNotificationsInput = {
  id: string;
  meetingid?: string | null;
  request?: Request | null;
  userid?: string | null;
  date?: string | null;
  doctorid?: string | null;
};

export type DeleteNotificationsInput = {
  id: string;
};

export type CreatePaymentfromWalletInput = {
  id?: string | null;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
};

export type ModelPaymentfromWalletConditionInput = {
  amount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  and?: Array<ModelPaymentfromWalletConditionInput | null> | null;
  or?: Array<ModelPaymentfromWalletConditionInput | null> | null;
  not?: ModelPaymentfromWalletConditionInput | null;
};

export type PaymentfromWallet = {
  __typename: "PaymentfromWallet";
  id?: string;
  amount?: string;
  currency?: string;
  date?: string;
  paymentfrom?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePaymentfromWalletInput = {
  id: string;
  amount?: string | null;
  currency?: string | null;
  date?: string | null;
  paymentfrom?: string | null;
};

export type DeletePaymentfromWalletInput = {
  id: string;
};

export type CreatePaymentforWalletInput = {
  id?: string | null;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
};

export type ModelPaymentforWalletConditionInput = {
  amount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  and?: Array<ModelPaymentforWalletConditionInput | null> | null;
  or?: Array<ModelPaymentforWalletConditionInput | null> | null;
  not?: ModelPaymentforWalletConditionInput | null;
};

export type PaymentforWallet = {
  __typename: "PaymentforWallet";
  id?: string;
  amount?: string;
  currency?: string;
  date?: string;
  paymentfrom?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePaymentforWalletInput = {
  id: string;
  amount?: string | null;
  currency?: string | null;
  date?: string | null;
  paymentfrom?: string | null;
};

export type DeletePaymentforWalletInput = {
  id: string;
};

export type CreatePaymentforAppointmentInput = {
  id?: string | null;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
};

export type ModelPaymentforAppointmentConditionInput = {
  amount?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentto?: ModelIDInput | null;
  appointmentid?: ModelIDInput | null;
  and?: Array<ModelPaymentforAppointmentConditionInput | null> | null;
  or?: Array<ModelPaymentforAppointmentConditionInput | null> | null;
  not?: ModelPaymentforAppointmentConditionInput | null;
};

export type PaymentforAppointment = {
  __typename: "PaymentforAppointment";
  id?: string;
  amount?: string;
  paymentfrom?: string;
  currency?: string;
  date?: string;
  paymentto?: string;
  appointmentid?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdatePaymentforAppointmentInput = {
  id: string;
  amount?: string | null;
  paymentfrom?: string | null;
  currency?: string | null;
  date?: string | null;
  paymentto?: string | null;
  appointmentid?: string | null;
};

export type DeletePaymentforAppointmentInput = {
  id: string;
};

export type CreateWellnessPostInput = {
  id?: string | null;
  title: string;
  image: boolean;
  date: string;
  description: string;
};

export type ModelWellnessPostConditionInput = {
  title?: ModelStringInput | null;
  image?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelWellnessPostConditionInput | null> | null;
  or?: Array<ModelWellnessPostConditionInput | null> | null;
  not?: ModelWellnessPostConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type WellnessPost = {
  __typename: "WellnessPost";
  id?: string;
  title?: string;
  image?: boolean;
  date?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateWellnessPostInput = {
  id: string;
  title?: string | null;
  image?: boolean | null;
  date?: string | null;
  description?: string | null;
};

export type DeleteWellnessPostInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
};

export type ModelPostConditionInput = {
  UserID?: ModelIDInput | null;
  postidreference?: ModelIDInput | null;
  PostType?: ModelPostTypeInput | null;
  title?: ModelStringInput | null;
  image?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  numberoflikes?: ModelStringInput | null;
  imagetype?: ModelVideoTypeInput | null;
  DoctorType?: ModelDoctorTypeInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelPostTypeInput = {
  eq?: PostType | null;
  ne?: PostType | null;
};

export type ModelVideoTypeInput = {
  eq?: VideoType | null;
  ne?: VideoType | null;
};

export type UpdatePostInput = {
  id: string;
  UserID?: string | null;
  postidreference?: string | null;
  PostType?: PostType | null;
  title?: string | null;
  image?: boolean | null;
  date?: string | null;
  description?: string | null;
  numberoflikes?: string | null;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateLikesInput = {
  id?: string | null;
  PostID: string;
  date: string;
  UserId: string;
};

export type ModelLikesConditionInput = {
  PostID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  UserId?: ModelIDInput | null;
  and?: Array<ModelLikesConditionInput | null> | null;
  or?: Array<ModelLikesConditionInput | null> | null;
  not?: ModelLikesConditionInput | null;
};

export type UpdateLikesInput = {
  id: string;
  PostID?: string | null;
  date?: string | null;
  UserId?: string | null;
};

export type DeleteLikesInput = {
  id: string;
};

export type CreateCommentsInput = {
  id?: string | null;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
};

export type ModelCommentsConditionInput = {
  PostID?: ModelIDInput | null;
  UserId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  commentfrom?: ModelUserTypeInput | null;
  and?: Array<ModelCommentsConditionInput | null> | null;
  or?: Array<ModelCommentsConditionInput | null> | null;
  not?: ModelCommentsConditionInput | null;
};

export type ModelUserTypeInput = {
  eq?: UserType | null;
  ne?: UserType | null;
};

export type UpdateCommentsInput = {
  id: string;
  PostID?: string | null;
  UserId?: string | null;
  date?: string | null;
  comment?: string | null;
  commentfrom?: UserType | null;
};

export type DeleteCommentsInput = {
  id: string;
};

export type CreateReplyCommentsInput = {
  id?: string | null;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
};

export type ModelReplyCommentsConditionInput = {
  PostID?: ModelIDInput | null;
  UserId?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  date?: ModelStringInput | null;
  commentfrom?: ModelUserTypeInput | null;
  and?: Array<ModelReplyCommentsConditionInput | null> | null;
  or?: Array<ModelReplyCommentsConditionInput | null> | null;
  not?: ModelReplyCommentsConditionInput | null;
};

export type ReplyComments = {
  __typename: "ReplyComments";
  id?: string;
  PostID?: string;
  UserId?: string;
  comment?: string;
  date?: string;
  commentfrom?: UserType;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateReplyCommentsInput = {
  id: string;
  PostID?: string | null;
  UserId?: string | null;
  comment?: string | null;
  date?: string | null;
  commentfrom?: UserType | null;
};

export type DeleteReplyCommentsInput = {
  id: string;
};

export type CreateReportInput = {
  id?: string | null;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
};

export enum ReportType {
  HARDCOPY = "HARDCOPY",
  DIGITAL = "DIGITAL",
  PERSONAL = "PERSONAL"
}

export type ModelReportConditionInput = {
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelIDInput | null;
  reoporttype?: ModelReportTypeInput | null;
  date?: ModelStringInput | null;
  summnaryname?: ModelStringInput | null;
  summarydosage?: ModelStringInput | null;
  summnaryinstr?: ModelStringInput | null;
  summnaryreason?: ModelStringInput | null;
  rxname?: ModelStringInput | null;
  rxdosage?: ModelStringInput | null;
  rxinstr?: ModelStringInput | null;
  rxreason?: ModelStringInput | null;
  labsname?: ModelStringInput | null;
  labsdosage?: ModelStringInput | null;
  labsinstr?: ModelStringInput | null;
  labsreason?: ModelStringInput | null;
  visitnotes?: ModelStringInput | null;
  and?: Array<ModelReportConditionInput | null> | null;
  or?: Array<ModelReportConditionInput | null> | null;
  not?: ModelReportConditionInput | null;
};

export type ModelReportTypeInput = {
  eq?: ReportType | null;
  ne?: ReportType | null;
};

export type Report = {
  __typename: "Report";
  id?: string;
  userID?: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype?: ReportType;
  date?: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateReportInput = {
  id: string;
  userID?: string | null;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype?: ReportType | null;
  date?: string | null;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
};

export type DeleteReportInput = {
  id: string;
};

export type CreateCoachPrescTaskInput = {
  id?: string | null;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
};

export enum WeekDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

export type ModelCoachPrescTaskConditionInput = {
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelIDInput | null;
  weekday?: ModelWeekDayInput | null;
  task?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelCoachPrescTaskConditionInput | null> | null;
  or?: Array<ModelCoachPrescTaskConditionInput | null> | null;
  not?: ModelCoachPrescTaskConditionInput | null;
};

export type ModelWeekDayInput = {
  eq?: WeekDay | null;
  ne?: WeekDay | null;
};

export type CoachPrescTask = {
  __typename: "CoachPrescTask";
  id?: string;
  userID?: string;
  doctorID?: string;
  meetingid?: string;
  weekday?: WeekDay;
  task?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCoachPrescTaskInput = {
  id: string;
  userID?: string | null;
  doctorID?: string | null;
  meetingid?: string | null;
  weekday?: WeekDay | null;
  task?: string | null;
  date?: string | null;
};

export type DeleteCoachPrescTaskInput = {
  id: string;
};

export type CreateReportsSharedInput = {
  id?: string | null;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
};

export type ModelReportsSharedConditionInput = {
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelReportsSharedConditionInput | null> | null;
  or?: Array<ModelReportsSharedConditionInput | null> | null;
  not?: ModelReportsSharedConditionInput | null;
};

export type ReportsShared = {
  __typename: "ReportsShared";
  id?: string;
  userID?: string;
  doctorID?: string;
  meetingid?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateReportsSharedInput = {
  id: string;
  userID?: string | null;
  doctorID?: string | null;
  meetingid?: string | null;
  date?: string | null;
};

export type DeleteReportsSharedInput = {
  id: string;
};

export type CreateAppointmentInput = {
  id?: string | null;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
};

export type ModelAppointmentConditionInput = {
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  paymentMode?: ModelPaymentModeInput | null;
  packagebuyid?: ModelIDInput | null;
  consultationfees?: ModelStringInput | null;
  PaymentCompletionStatus?: ModelPaymentCompletionStatusInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  starttime?: ModelStringInput | null;
  slottime?: ModelStringInput | null;
  date?: ModelStringInput | null;
  meetingid?: ModelIDInput | null;
  status?: ModelStatusInput | null;
  request?: ModelRequestInput | null;
  message?: ModelStringInput | null;
  personalConsult?: ModelBooleanInput | null;
  videoconsult?: ModelBooleanInput | null;
  cancelledbyuser?: ModelBooleanInput | null;
  cancellationdate?: ModelStringInput | null;
  cancelledbydoctor?: ModelBooleanInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelAppointmentConditionInput | null> | null;
  or?: Array<ModelAppointmentConditionInput | null> | null;
  not?: ModelAppointmentConditionInput | null;
};

export type ModelStatusInput = {
  eq?: Status | null;
  ne?: Status | null;
};

export type UpdateAppointmentInput = {
  id: string;
  userID?: string | null;
  doctorID?: string | null;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees?: string | null;
  PaymentCompletionStatus?: PaymentCompletionStatus | null;
  conultationfesscurrency?: string | null;
  starttime?: string | null;
  slottime?: string | null;
  date?: string | null;
  meetingid?: string | null;
  status?: Status | null;
  request?: Request | null;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype?: DoctorType | null;
};

export type DeleteAppointmentInput = {
  id: string;
};

export type CreateCommunityMessageInput = {
  id?: string | null;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
};

export type ModelCommunityMessageConditionInput = {
  communityid?: ModelIDInput | null;
  messagefrom?: ModelIDInput | null;
  date?: ModelStringInput | null;
  content?: ModelStringInput | null;
  messagetype?: ModelMessageTypeInput | null;
  and?: Array<ModelCommunityMessageConditionInput | null> | null;
  or?: Array<ModelCommunityMessageConditionInput | null> | null;
  not?: ModelCommunityMessageConditionInput | null;
};

export type ModelMessageTypeInput = {
  eq?: MessageType | null;
  ne?: MessageType | null;
};

export type CommunityMessage = {
  __typename: "CommunityMessage";
  id?: string;
  communityid?: string;
  messagefrom?: string;
  date?: string;
  content?: string;
  messagetype?: MessageType;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateCommunityMessageInput = {
  id: string;
  communityid?: string | null;
  messagefrom?: string | null;
  date?: string | null;
  content?: string | null;
  messagetype?: MessageType | null;
};

export type DeleteCommunityMessageInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
};

export type ModelMessageConditionInput = {
  DoctorsID?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  messagetype?: ModelMessageTypeInput | null;
  content?: ModelStringInput | null;
  currentmessage?: ModelIDInput | null;
  readbydoctor?: ModelBooleanInput | null;
  imageboolean?: ModelBooleanInput | null;
  readbyuser?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  DoctorsID?: string | null;
  UserID?: string | null;
  messagetype?: MessageType | null;
  content?: string | null;
  currentmessage?: string | null;
  readbydoctor?: boolean | null;
  imageboolean?: boolean | null;
  readbyuser?: boolean | null;
  date?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateUserDatabaseInput = {
  id?: string | null;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
};

export type ModelUserDatabaseConditionInput = {
  UserID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  sex?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  hieght?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  emailaddress?: ModelStringInput | null;
  phonenumber?: ModelStringInput | null;
  emergencycontact?: ModelStringInput | null;
  streetaddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  smoke?: ModelStringInput | null;
  alchol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelUserDatabaseConditionInput | null> | null;
  or?: Array<ModelUserDatabaseConditionInput | null> | null;
  not?: ModelUserDatabaseConditionInput | null;
};

export type UpdateUserDatabaseInput = {
  id: string;
  UserID?: string | null;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
};

export type DeleteUserDatabaseInput = {
  id: string;
};

export type CreateAllergiesInput = {
  id?: string | null;
  userid: string;
  allergyname: string;
  description: string;
};

export type ModelAllergiesConditionInput = {
  userid?: ModelIDInput | null;
  allergyname?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelAllergiesConditionInput | null> | null;
  or?: Array<ModelAllergiesConditionInput | null> | null;
  not?: ModelAllergiesConditionInput | null;
};

export type Allergies = {
  __typename: "Allergies";
  id?: string;
  userid?: string;
  allergyname?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateAllergiesInput = {
  id: string;
  userid?: string | null;
  allergyname?: string | null;
  description?: string | null;
};

export type DeleteAllergiesInput = {
  id: string;
};

export type CreateExperienceInput = {
  id?: string | null;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
};

export type ModelExperienceConditionInput = {
  doctorID?: ModelIDInput | null;
  Title?: ModelStringInput | null;
  CompanyName?: ModelStringInput | null;
  location?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  Description?: ModelStringInput | null;
  startdate?: ModelStringInput | null;
  enddate?: ModelStringInput | null;
  and?: Array<ModelExperienceConditionInput | null> | null;
  or?: Array<ModelExperienceConditionInput | null> | null;
  not?: ModelExperienceConditionInput | null;
};

export type UpdateExperienceInput = {
  id: string;
  doctorID?: string | null;
  Title?: string | null;
  CompanyName?: string | null;
  location?: string | null;
  doctortype?: DoctorType | null;
  Description?: string | null;
  startdate?: string | null;
  enddate?: string | null;
};

export type DeleteExperienceInput = {
  id: string;
};

export type CreateDoctorInput = {
  id?: string | null;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
};

export type ModelDoctorConditionInput = {
  UserID?: ModelIDInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  name?: ModelStringInput | null;
  about?: ModelStringInput | null;
  npi?: ModelStringInput | null;
  languagesspoken?: ModelStringInput | null;
  country?: ModelStringInput | null;
  localaddress?: ModelStringInput | null;
  paycut?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  specialization?: ModelStringInput | null;
  yearsofexxperience?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  status?: ModelDoctorProfileReviewInput | null;
  insurance?: ModelStringInput | null;
  offlineconsultation?: ModelBooleanInput | null;
  appointmentscompleted?: ModelStringInput | null;
  viewsonprofile?: ModelStringInput | null;
  and?: Array<ModelDoctorConditionInput | null> | null;
  or?: Array<ModelDoctorConditionInput | null> | null;
  not?: ModelDoctorConditionInput | null;
};

export type ModelDoctorProfileReviewInput = {
  eq?: DoctorProfileReview | null;
  ne?: DoctorProfileReview | null;
};

export type UpdateDoctorInput = {
  id: string;
  UserID?: string | null;
  doctortype?: DoctorType | null;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut?: string | null;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status?: DoctorProfileReview | null;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted?: string | null;
  viewsonprofile?: string | null;
};

export type DeleteDoctorInput = {
  id: string;
};

export type CreateCertificatesInput = {
  id?: string | null;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
};

export type ModelCertificatesConditionInput = {
  doctorID?: ModelIDInput | null;
  imageurl?: ModelStringInput | null;
  description?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelCertificatesConditionInput | null> | null;
  or?: Array<ModelCertificatesConditionInput | null> | null;
  not?: ModelCertificatesConditionInput | null;
};

export type UpdateCertificatesInput = {
  id: string;
  doctorID?: string | null;
  imageurl?: string | null;
  description?: string | null;
  doctortype?: DoctorType | null;
};

export type DeleteCertificatesInput = {
  id: string;
};

export type CreateSlotsInput = {
  id?: string | null;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
};

export enum SlotActiveInactive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export type ModelSlotsConditionInput = {
  doctorID?: ModelIDInput | null;
  consulttime?: ModelStringInput | null;
  starttime?: ModelStringInput | null;
  endtime?: ModelStringInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  videoconsultations?: ModelBooleanInput | null;
  inpersonconsultation?: ModelBooleanInput | null;
  videoandinpersonconsultation?: ModelBooleanInput | null;
  consultationtimeedit?: ModelStringInput | null;
  monday?: ModelBooleanInput | null;
  tuesday?: ModelBooleanInput | null;
  wednesday?: ModelBooleanInput | null;
  thursday?: ModelBooleanInput | null;
  friday?: ModelBooleanInput | null;
  saturday?: ModelBooleanInput | null;
  sunday?: ModelBooleanInput | null;
  activeinactive?: ModelSlotActiveInactiveInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelSlotsConditionInput | null> | null;
  or?: Array<ModelSlotsConditionInput | null> | null;
  not?: ModelSlotsConditionInput | null;
};

export type ModelSlotActiveInactiveInput = {
  eq?: SlotActiveInactive | null;
  ne?: SlotActiveInactive | null;
};

export type Slots = {
  __typename: "Slots";
  id?: string;
  doctorID?: string;
  consulttime?: string;
  starttime?: string;
  endtime?: string;
  consultationfees?: string;
  conultationfesscurrency?: string;
  videoconsultations?: boolean;
  inpersonconsultation?: boolean;
  videoandinpersonconsultation?: boolean;
  consultationtimeedit?: string;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype?: DoctorType;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateSlotsInput = {
  id: string;
  doctorID?: string | null;
  consulttime?: string | null;
  starttime?: string | null;
  endtime?: string | null;
  consultationfees?: string | null;
  conultationfesscurrency?: string | null;
  videoconsultations?: boolean | null;
  inpersonconsultation?: boolean | null;
  videoandinpersonconsultation?: boolean | null;
  consultationtimeedit?: string | null;
  monday?: boolean | null;
  tuesday?: boolean | null;
  wednesday?: boolean | null;
  thursday?: boolean | null;
  friday?: boolean | null;
  saturday?: boolean | null;
  sunday?: boolean | null;
  activeinactive?: SlotActiveInactive | null;
  doctortype?: DoctorType | null;
};

export type DeleteSlotsInput = {
  id: string;
};

export type CreateInviteInput = {
  id?: string | null;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
};

export type ModelInviteConditionInput = {
  doctorID?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  message?: ModelStringInput | null;
  invite?: ModelRequestInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelInviteConditionInput | null> | null;
  or?: Array<ModelInviteConditionInput | null> | null;
  not?: ModelInviteConditionInput | null;
};

export type Invite = {
  __typename: "Invite";
  id?: string;
  doctorID?: string;
  UserID?: string;
  message?: string;
  invite?: Request;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type UpdateInviteInput = {
  id: string;
  doctorID?: string | null;
  UserID?: string | null;
  message?: string | null;
  invite?: Request | null;
  date?: string | null;
};

export type DeleteInviteInput = {
  id: string;
};

export type CreateEducationInput = {
  id?: string | null;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
};

export type ModelEducationConditionInput = {
  doctorID?: ModelIDInput | null;
  nameofuniversity?: ModelStringInput | null;
  fieldofstudy?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  degree?: ModelStringInput | null;
  startdate?: ModelStringInput | null;
  enddate?: ModelStringInput | null;
  gradepoint?: ModelStringInput | null;
  and?: Array<ModelEducationConditionInput | null> | null;
  or?: Array<ModelEducationConditionInput | null> | null;
  not?: ModelEducationConditionInput | null;
};

export type UpdateEducationInput = {
  id: string;
  doctorID?: string | null;
  nameofuniversity?: string | null;
  fieldofstudy?: string | null;
  doctortype?: DoctorType | null;
  degree?: string | null;
  startdate?: string | null;
  enddate?: string | null;
  gradepoint?: string | null;
};

export type DeleteEducationInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  userid?: ModelIDInput | null;
  email?: ModelStringInput | null;
  awsdate?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items?: Array<User | null> | null;
  nextToken?: string | null;
};

export type ModelBookMarkFilterInput = {
  id?: ModelIDInput | null;
  userid?: ModelIDInput | null;
  bookmarktype?: ModelBookMarkTypeInput | null;
  discussiongroupid?: ModelIDInput | null;
  livebroadcastingid?: ModelIDInput | null;
  and?: Array<ModelBookMarkFilterInput | null> | null;
  or?: Array<ModelBookMarkFilterInput | null> | null;
  not?: ModelBookMarkFilterInput | null;
};

export type ModelBookMarkConnection = {
  __typename: "ModelBookMarkConnection";
  items?: Array<BookMark | null> | null;
  nextToken?: string | null;
};

export type ModelPaymentRequestFilterInput = {
  id?: ModelIDInput | null;
  PaymentRequestType?: ModelPaymentRequestTypeInput | null;
  doctorID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  appointmentid?: ModelIDInput | null;
  request?: ModelPaymenttoDoctorInput | null;
  paidtodoctordate?: ModelStringInput | null;
  and?: Array<ModelPaymentRequestFilterInput | null> | null;
  or?: Array<ModelPaymentRequestFilterInput | null> | null;
  not?: ModelPaymentRequestFilterInput | null;
};

export type ModelPaymentRequestConnection = {
  __typename: "ModelPaymentRequestConnection";
  items?: Array<PaymentRequest | null> | null;
  nextToken?: string | null;
};

export type ModelPackagesBuyFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  numberofappointmentsused?: ModelStringInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  numofappointments?: ModelStringInput | null;
  validity?: ModelStringInput | null;
  date?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  PaymentCompletionStatus?: ModelPaymentCompletionStatusInput | null;
  PaymentMode?: ModelPaymentModeInput | null;
  and?: Array<ModelPackagesBuyFilterInput | null> | null;
  or?: Array<ModelPackagesBuyFilterInput | null> | null;
  not?: ModelPackagesBuyFilterInput | null;
};

export type ModelPackagesBuyConnection = {
  __typename: "ModelPackagesBuyConnection";
  items?: Array<PackagesBuy | null> | null;
  nextToken?: string | null;
};

export type ModelPackagesFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  numofappointments?: ModelStringInput | null;
  validity?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelPackagesFilterInput | null> | null;
  or?: Array<ModelPackagesFilterInput | null> | null;
  not?: ModelPackagesFilterInput | null;
};

export type ModelPackagesConnection = {
  __typename: "ModelPackagesConnection";
  items?: Array<Packages | null> | null;
  nextToken?: string | null;
};

export type ModelBroadCastFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  BroadCastStatus?: ModelBroadCastStatusInput | null;
  and?: Array<ModelBroadCastFilterInput | null> | null;
  or?: Array<ModelBroadCastFilterInput | null> | null;
  not?: ModelBroadCastFilterInput | null;
};

export type ModelBroadCastConnection = {
  __typename: "ModelBroadCastConnection";
  items?: Array<BroadCast | null> | null;
  nextToken?: string | null;
};

export type ModelCommunitiesFilterInput = {
  id?: ModelIDInput | null;
  communityname?: ModelStringInput | null;
  communityowner?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCommunitiesFilterInput | null> | null;
  or?: Array<ModelCommunitiesFilterInput | null> | null;
  not?: ModelCommunitiesFilterInput | null;
};

export type ModelCommunitiesConnection = {
  __typename: "ModelCommunitiesConnection";
  items?: Array<Communities | null> | null;
  nextToken?: string | null;
};

export type ModelContactUsFilterInput = {
  id?: ModelIDInput | null;
  userid?: ModelIDInput | null;
  date?: ModelStringInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelContactUsFilterInput | null> | null;
  or?: Array<ModelContactUsFilterInput | null> | null;
  not?: ModelContactUsFilterInput | null;
};

export type ModelContactUsConnection = {
  __typename: "ModelContactUsConnection";
  items?: Array<ContactUs | null> | null;
  nextToken?: string | null;
};

export type ModelNotificationsFilterInput = {
  id?: ModelIDInput | null;
  meetingid?: ModelIDInput | null;
  request?: ModelRequestInput | null;
  userid?: ModelIDInput | null;
  date?: ModelStringInput | null;
  doctorid?: ModelIDInput | null;
  and?: Array<ModelNotificationsFilterInput | null> | null;
  or?: Array<ModelNotificationsFilterInput | null> | null;
  not?: ModelNotificationsFilterInput | null;
};

export type ModelNotificationsConnection = {
  __typename: "ModelNotificationsConnection";
  items?: Array<Notifications | null> | null;
  nextToken?: string | null;
};

export type ModelPaymentfromWalletFilterInput = {
  id?: ModelIDInput | null;
  amount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  and?: Array<ModelPaymentfromWalletFilterInput | null> | null;
  or?: Array<ModelPaymentfromWalletFilterInput | null> | null;
  not?: ModelPaymentfromWalletFilterInput | null;
};

export type ModelPaymentfromWalletConnection = {
  __typename: "ModelPaymentfromWalletConnection";
  items?: Array<PaymentfromWallet | null> | null;
  nextToken?: string | null;
};

export type ModelPaymentforWalletFilterInput = {
  id?: ModelIDInput | null;
  amount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  and?: Array<ModelPaymentforWalletFilterInput | null> | null;
  or?: Array<ModelPaymentforWalletFilterInput | null> | null;
  not?: ModelPaymentforWalletFilterInput | null;
};

export type ModelPaymentforWalletConnection = {
  __typename: "ModelPaymentforWalletConnection";
  items?: Array<PaymentforWallet | null> | null;
  nextToken?: string | null;
};

export type ModelPaymentforAppointmentFilterInput = {
  id?: ModelIDInput | null;
  amount?: ModelStringInput | null;
  paymentfrom?: ModelIDInput | null;
  currency?: ModelStringInput | null;
  date?: ModelStringInput | null;
  paymentto?: ModelIDInput | null;
  appointmentid?: ModelIDInput | null;
  and?: Array<ModelPaymentforAppointmentFilterInput | null> | null;
  or?: Array<ModelPaymentforAppointmentFilterInput | null> | null;
  not?: ModelPaymentforAppointmentFilterInput | null;
};

export type ModelPaymentforAppointmentConnection = {
  __typename: "ModelPaymentforAppointmentConnection";
  items?: Array<PaymentforAppointment | null> | null;
  nextToken?: string | null;
};

export type ModelWellnessPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  image?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelWellnessPostFilterInput | null> | null;
  or?: Array<ModelWellnessPostFilterInput | null> | null;
  not?: ModelWellnessPostFilterInput | null;
};

export type ModelWellnessPostConnection = {
  __typename: "ModelWellnessPostConnection";
  items?: Array<WellnessPost | null> | null;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  postidreference?: ModelIDInput | null;
  PostType?: ModelPostTypeInput | null;
  title?: ModelStringInput | null;
  image?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  numberoflikes?: ModelStringInput | null;
  imagetype?: ModelVideoTypeInput | null;
  DoctorType?: ModelDoctorTypeInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelLikesFilterInput = {
  id?: ModelIDInput | null;
  PostID?: ModelIDInput | null;
  date?: ModelStringInput | null;
  UserId?: ModelIDInput | null;
  and?: Array<ModelLikesFilterInput | null> | null;
  or?: Array<ModelLikesFilterInput | null> | null;
  not?: ModelLikesFilterInput | null;
};

export type ModelCommentsFilterInput = {
  id?: ModelIDInput | null;
  PostID?: ModelIDInput | null;
  UserId?: ModelIDInput | null;
  date?: ModelStringInput | null;
  comment?: ModelStringInput | null;
  commentfrom?: ModelUserTypeInput | null;
  and?: Array<ModelCommentsFilterInput | null> | null;
  or?: Array<ModelCommentsFilterInput | null> | null;
  not?: ModelCommentsFilterInput | null;
};

export type ModelReplyCommentsFilterInput = {
  id?: ModelIDInput | null;
  PostID?: ModelIDInput | null;
  UserId?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  date?: ModelStringInput | null;
  commentfrom?: ModelUserTypeInput | null;
  and?: Array<ModelReplyCommentsFilterInput | null> | null;
  or?: Array<ModelReplyCommentsFilterInput | null> | null;
  not?: ModelReplyCommentsFilterInput | null;
};

export type ModelReplyCommentsConnection = {
  __typename: "ModelReplyCommentsConnection";
  items?: Array<ReplyComments | null> | null;
  nextToken?: string | null;
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelIDInput | null;
  reoporttype?: ModelReportTypeInput | null;
  date?: ModelStringInput | null;
  summnaryname?: ModelStringInput | null;
  summarydosage?: ModelStringInput | null;
  summnaryinstr?: ModelStringInput | null;
  summnaryreason?: ModelStringInput | null;
  rxname?: ModelStringInput | null;
  rxdosage?: ModelStringInput | null;
  rxinstr?: ModelStringInput | null;
  rxreason?: ModelStringInput | null;
  labsname?: ModelStringInput | null;
  labsdosage?: ModelStringInput | null;
  labsinstr?: ModelStringInput | null;
  labsreason?: ModelStringInput | null;
  visitnotes?: ModelStringInput | null;
  and?: Array<ModelReportFilterInput | null> | null;
  or?: Array<ModelReportFilterInput | null> | null;
  not?: ModelReportFilterInput | null;
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection";
  items?: Array<Report | null> | null;
  nextToken?: string | null;
};

export type ModelCoachPrescTaskFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelIDInput | null;
  weekday?: ModelWeekDayInput | null;
  task?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelCoachPrescTaskFilterInput | null> | null;
  or?: Array<ModelCoachPrescTaskFilterInput | null> | null;
  not?: ModelCoachPrescTaskFilterInput | null;
};

export type ModelCoachPrescTaskConnection = {
  __typename: "ModelCoachPrescTaskConnection";
  items?: Array<CoachPrescTask | null> | null;
  nextToken?: string | null;
};

export type ModelReportsSharedFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  meetingid?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelReportsSharedFilterInput | null> | null;
  or?: Array<ModelReportsSharedFilterInput | null> | null;
  not?: ModelReportsSharedFilterInput | null;
};

export type ModelReportsSharedConnection = {
  __typename: "ModelReportsSharedConnection";
  items?: Array<ReportsShared | null> | null;
  nextToken?: string | null;
};

export type ModelAppointmentFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  paymentMode?: ModelPaymentModeInput | null;
  packagebuyid?: ModelIDInput | null;
  consultationfees?: ModelStringInput | null;
  PaymentCompletionStatus?: ModelPaymentCompletionStatusInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  starttime?: ModelStringInput | null;
  slottime?: ModelStringInput | null;
  date?: ModelStringInput | null;
  meetingid?: ModelIDInput | null;
  status?: ModelStatusInput | null;
  request?: ModelRequestInput | null;
  message?: ModelStringInput | null;
  personalConsult?: ModelBooleanInput | null;
  videoconsult?: ModelBooleanInput | null;
  cancelledbyuser?: ModelBooleanInput | null;
  cancellationdate?: ModelStringInput | null;
  cancelledbydoctor?: ModelBooleanInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelAppointmentFilterInput | null> | null;
  or?: Array<ModelAppointmentFilterInput | null> | null;
  not?: ModelAppointmentFilterInput | null;
};

export type ModelCommunityMessageFilterInput = {
  id?: ModelIDInput | null;
  communityid?: ModelIDInput | null;
  messagefrom?: ModelIDInput | null;
  date?: ModelStringInput | null;
  content?: ModelStringInput | null;
  messagetype?: ModelMessageTypeInput | null;
  and?: Array<ModelCommunityMessageFilterInput | null> | null;
  or?: Array<ModelCommunityMessageFilterInput | null> | null;
  not?: ModelCommunityMessageFilterInput | null;
};

export type ModelCommunityMessageConnection = {
  __typename: "ModelCommunityMessageConnection";
  items?: Array<CommunityMessage | null> | null;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  DoctorsID?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  messagetype?: ModelMessageTypeInput | null;
  content?: ModelStringInput | null;
  currentmessage?: ModelIDInput | null;
  readbydoctor?: ModelBooleanInput | null;
  imageboolean?: ModelBooleanInput | null;
  readbyuser?: ModelBooleanInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelUserDatabaseFilterInput = {
  id?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  sex?: ModelStringInput | null;
  birthday?: ModelStringInput | null;
  hieght?: ModelStringInput | null;
  weight?: ModelStringInput | null;
  emailaddress?: ModelStringInput | null;
  phonenumber?: ModelStringInput | null;
  emergencycontact?: ModelStringInput | null;
  streetaddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  smoke?: ModelStringInput | null;
  alchol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelUserDatabaseFilterInput | null> | null;
  or?: Array<ModelUserDatabaseFilterInput | null> | null;
  not?: ModelUserDatabaseFilterInput | null;
};

export type ModelAllergiesFilterInput = {
  id?: ModelIDInput | null;
  userid?: ModelIDInput | null;
  allergyname?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelAllergiesFilterInput | null> | null;
  or?: Array<ModelAllergiesFilterInput | null> | null;
  not?: ModelAllergiesFilterInput | null;
};

export type ModelAllergiesConnection = {
  __typename: "ModelAllergiesConnection";
  items?: Array<Allergies | null> | null;
  nextToken?: string | null;
};

export type ModelExperienceFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  Title?: ModelStringInput | null;
  CompanyName?: ModelStringInput | null;
  location?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  Description?: ModelStringInput | null;
  startdate?: ModelStringInput | null;
  enddate?: ModelStringInput | null;
  and?: Array<ModelExperienceFilterInput | null> | null;
  or?: Array<ModelExperienceFilterInput | null> | null;
  not?: ModelExperienceFilterInput | null;
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  name?: ModelStringInput | null;
  about?: ModelStringInput | null;
  npi?: ModelStringInput | null;
  languagesspoken?: ModelStringInput | null;
  country?: ModelStringInput | null;
  localaddress?: ModelStringInput | null;
  paycut?: ModelStringInput | null;
  state?: ModelStringInput | null;
  zipcode?: ModelStringInput | null;
  specialization?: ModelStringInput | null;
  yearsofexxperience?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  status?: ModelDoctorProfileReviewInput | null;
  insurance?: ModelStringInput | null;
  offlineconsultation?: ModelBooleanInput | null;
  appointmentscompleted?: ModelStringInput | null;
  viewsonprofile?: ModelStringInput | null;
  and?: Array<ModelDoctorFilterInput | null> | null;
  or?: Array<ModelDoctorFilterInput | null> | null;
  not?: ModelDoctorFilterInput | null;
};

export type ModelCertificatesFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  imageurl?: ModelStringInput | null;
  description?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelCertificatesFilterInput | null> | null;
  or?: Array<ModelCertificatesFilterInput | null> | null;
  not?: ModelCertificatesFilterInput | null;
};

export type ModelSlotsFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  consulttime?: ModelStringInput | null;
  starttime?: ModelStringInput | null;
  endtime?: ModelStringInput | null;
  consultationfees?: ModelStringInput | null;
  conultationfesscurrency?: ModelStringInput | null;
  videoconsultations?: ModelBooleanInput | null;
  inpersonconsultation?: ModelBooleanInput | null;
  videoandinpersonconsultation?: ModelBooleanInput | null;
  consultationtimeedit?: ModelStringInput | null;
  monday?: ModelBooleanInput | null;
  tuesday?: ModelBooleanInput | null;
  wednesday?: ModelBooleanInput | null;
  thursday?: ModelBooleanInput | null;
  friday?: ModelBooleanInput | null;
  saturday?: ModelBooleanInput | null;
  sunday?: ModelBooleanInput | null;
  activeinactive?: ModelSlotActiveInactiveInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  and?: Array<ModelSlotsFilterInput | null> | null;
  or?: Array<ModelSlotsFilterInput | null> | null;
  not?: ModelSlotsFilterInput | null;
};

export type ModelSlotsConnection = {
  __typename: "ModelSlotsConnection";
  items?: Array<Slots | null> | null;
  nextToken?: string | null;
};

export type ModelInviteFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  UserID?: ModelIDInput | null;
  message?: ModelStringInput | null;
  invite?: ModelRequestInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelInviteFilterInput | null> | null;
  or?: Array<ModelInviteFilterInput | null> | null;
  not?: ModelInviteFilterInput | null;
};

export type ModelInviteConnection = {
  __typename: "ModelInviteConnection";
  items?: Array<Invite | null> | null;
  nextToken?: string | null;
};

export type ModelEducationFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  nameofuniversity?: ModelStringInput | null;
  fieldofstudy?: ModelStringInput | null;
  doctortype?: ModelDoctorTypeInput | null;
  degree?: ModelStringInput | null;
  startdate?: ModelStringInput | null;
  enddate?: ModelStringInput | null;
  gradepoint?: ModelStringInput | null;
  and?: Array<ModelEducationFilterInput | null> | null;
  or?: Array<ModelEducationFilterInput | null> | null;
  not?: ModelEducationFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateBookMarkMutation = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBookMarkMutation = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBookMarkMutation = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePaymentRequestMutation = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePaymentRequestMutation = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePaymentRequestMutation = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePackagesBuyMutation = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePackagesBuyMutation = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePackagesBuyMutation = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePackagesMutation = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePackagesMutation = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type DeletePackagesMutation = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type CreateBroadCastMutation = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBroadCastMutation = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBroadCastMutation = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommunitiesMutation = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommunitiesMutation = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommunitiesMutation = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateContactUsMutation = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateContactUsMutation = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteContactUsMutation = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNotificationsMutation = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNotificationsMutation = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNotificationsMutation = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePaymentfromWalletMutation = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePaymentfromWalletMutation = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePaymentfromWalletMutation = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePaymentforWalletMutation = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePaymentforWalletMutation = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePaymentforWalletMutation = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePaymentforAppointmentMutation = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePaymentforAppointmentMutation = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePaymentforAppointmentMutation = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateWellnessPostMutation = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateWellnessPostMutation = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteWellnessPostMutation = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateLikesMutation = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLikesMutation = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLikesMutation = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentsMutation = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentsMutation = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentsMutation = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type CreateReplyCommentsMutation = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReplyCommentsMutation = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReplyCommentsMutation = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type CreateReportMutation = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReportMutation = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReportMutation = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCoachPrescTaskMutation = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCoachPrescTaskMutation = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCoachPrescTaskMutation = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateReportsSharedMutation = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReportsSharedMutation = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReportsSharedMutation = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAppointmentMutation = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommunityMessageMutation = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommunityMessageMutation = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommunityMessageMutation = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserDatabaseMutation = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserDatabaseMutation = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserDatabaseMutation = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateAllergiesMutation = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAllergiesMutation = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAllergiesMutation = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateExperienceMutation = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateExperienceMutation = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteExperienceMutation = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorMutation = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCertificatesMutation = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCertificatesMutation = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCertificatesMutation = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type CreateSlotsMutation = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSlotsMutation = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSlotsMutation = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type CreateInviteMutation = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInviteMutation = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInviteMutation = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateEducationMutation = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEducationMutation = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEducationMutation = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    id: string;
    name: string;
    userid: string;
    email: string;
    awsdate: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetBookMarkQuery = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBookMarksQuery = {
  __typename: "ModelBookMarkConnection";
  items?: Array<{
    __typename: "BookMark";
    id: string;
    userid: string;
    bookmarktype: BookMarkType;
    discussiongroupid?: string | null;
    livebroadcastingid?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPaymentRequestQuery = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPaymentRequestsQuery = {
  __typename: "ModelPaymentRequestConnection";
  items?: Array<{
    __typename: "PaymentRequest";
    id: string;
    PaymentRequestType: PaymentRequestType;
    doctorID: string;
    date: string;
    appointmentid: string;
    request: PaymenttoDoctor;
    paidtodoctordate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPackagesBuyQuery = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPackagesBuysQuery = {
  __typename: "ModelPackagesBuyConnection";
  items?: Array<{
    __typename: "PackagesBuy";
    id: string;
    doctorID: string;
    userID: string;
    numberofappointmentsused: string;
    consultationfees: string;
    conultationfesscurrency: string;
    numofappointments: string;
    validity: string;
    date: string;
    doctortype: DoctorType;
    PaymentCompletionStatus: PaymentCompletionStatus;
    PaymentMode?: PaymentMode | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPackagesQuery = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type ListPackagessQuery = {
  __typename: "ModelPackagesConnection";
  items?: Array<{
    __typename: "Packages";
    id: string;
    doctorID: string;
    consultationfees: string;
    conultationfesscurrency: string;
    numofappointments: string;
    validity: string;
    doctortype: DoctorType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetBroadCastQuery = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type ListBroadCastsQuery = {
  __typename: "ModelBroadCastConnection";
  items?: Array<{
    __typename: "BroadCast";
    id: string;
    doctorID: string;
    date: string;
    name: string;
    description: string;
    doctortype: DoctorType;
    BroadCastStatus: BroadCastStatus;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommunitiesQuery = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCommunitiessQuery = {
  __typename: "ModelCommunitiesConnection";
  items?: Array<{
    __typename: "Communities";
    id: string;
    communityname: string;
    communityowner: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetContactUsQuery = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListContactUssQuery = {
  __typename: "ModelContactUsConnection";
  items?: Array<{
    __typename: "ContactUs";
    id: string;
    userid: string;
    date: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetNotificationsQuery = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type ListNotificationssQuery = {
  __typename: "ModelNotificationsConnection";
  items?: Array<{
    __typename: "Notifications";
    id: string;
    meetingid: string;
    request: Request;
    userid: string;
    date: string;
    doctorid: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPaymentfromWalletQuery = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPaymentfromWalletsQuery = {
  __typename: "ModelPaymentfromWalletConnection";
  items?: Array<{
    __typename: "PaymentfromWallet";
    id: string;
    amount: string;
    currency: string;
    date: string;
    paymentfrom: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPaymentforWalletQuery = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPaymentforWalletsQuery = {
  __typename: "ModelPaymentforWalletConnection";
  items?: Array<{
    __typename: "PaymentforWallet";
    id: string;
    amount: string;
    currency: string;
    date: string;
    paymentfrom: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPaymentforAppointmentQuery = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPaymentforAppointmentsQuery = {
  __typename: "ModelPaymentforAppointmentConnection";
  items?: Array<{
    __typename: "PaymentforAppointment";
    id: string;
    amount: string;
    paymentfrom: string;
    currency: string;
    date: string;
    paymentto: string;
    appointmentid: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetWellnessPostQuery = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListWellnessPostsQuery = {
  __typename: "ModelWellnessPostConnection";
  items?: Array<{
    __typename: "WellnessPost";
    id: string;
    title: string;
    image: boolean;
    date: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    UserID: string;
    postidreference: string;
    PostType: PostType;
    title: string;
    image: boolean;
    date: string;
    description: string;
    numberoflikes: string;
    imagetype?: VideoType | null;
    DoctorType?: DoctorType | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetLikesQuery = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListLikessQuery = {
  __typename: "ModelLikesConnection";
  items?: Array<{
    __typename: "Likes";
    id: string;
    PostID: string;
    date: string;
    UserId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentsQuery = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentssQuery = {
  __typename: "ModelCommentsConnection";
  items?: Array<{
    __typename: "Comments";
    id: string;
    PostID: string;
    UserId: string;
    date: string;
    comment: string;
    commentfrom: UserType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetReplyCommentsQuery = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type ListReplyCommentssQuery = {
  __typename: "ModelReplyCommentsConnection";
  items?: Array<{
    __typename: "ReplyComments";
    id: string;
    PostID: string;
    UserId: string;
    comment: string;
    date: string;
    commentfrom: UserType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetReportQuery = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListReportsQuery = {
  __typename: "ModelReportConnection";
  items?: Array<{
    __typename: "Report";
    id: string;
    userID: string;
    doctorID?: string | null;
    meetingid?: string | null;
    reoporttype: ReportType;
    date: string;
    summnaryname?: string | null;
    summarydosage?: string | null;
    summnaryinstr?: string | null;
    summnaryreason?: string | null;
    rxname?: string | null;
    rxdosage?: string | null;
    rxinstr?: string | null;
    rxreason?: string | null;
    labsname?: string | null;
    labsdosage?: string | null;
    labsinstr?: string | null;
    labsreason?: string | null;
    visitnotes?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCoachPrescTaskQuery = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCoachPrescTasksQuery = {
  __typename: "ModelCoachPrescTaskConnection";
  items?: Array<{
    __typename: "CoachPrescTask";
    id: string;
    userID: string;
    doctorID: string;
    meetingid: string;
    weekday: WeekDay;
    task: string;
    date: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetReportsSharedQuery = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type ListReportsSharedsQuery = {
  __typename: "ModelReportsSharedConnection";
  items?: Array<{
    __typename: "ReportsShared";
    id: string;
    userID: string;
    doctorID: string;
    meetingid: string;
    date: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAppointmentQuery = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type ListAppointmentsQuery = {
  __typename: "ModelAppointmentConnection";
  items?: Array<{
    __typename: "Appointment";
    id: string;
    userID: string;
    doctorID: string;
    paymentMode?: PaymentMode | null;
    packagebuyid?: string | null;
    consultationfees: string;
    PaymentCompletionStatus: PaymentCompletionStatus;
    conultationfesscurrency: string;
    starttime: string;
    slottime: string;
    date: string;
    meetingid: string;
    status: Status;
    request: Request;
    message?: string | null;
    personalConsult?: boolean | null;
    videoconsult?: boolean | null;
    cancelledbyuser?: boolean | null;
    cancellationdate?: string | null;
    cancelledbydoctor?: boolean | null;
    doctortype: DoctorType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommunityMessageQuery = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type ListCommunityMessagesQuery = {
  __typename: "ModelCommunityMessageConnection";
  items?: Array<{
    __typename: "CommunityMessage";
    id: string;
    communityid: string;
    messagefrom: string;
    date: string;
    content: string;
    messagetype: MessageType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items?: Array<{
    __typename: "Message";
    id: string;
    DoctorsID: string;
    UserID: string;
    messagetype: MessageType;
    content?: string | null;
    currentmessage: string;
    readbydoctor: boolean;
    imageboolean: boolean;
    readbyuser: boolean;
    date?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetUserDatabaseQuery = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUserDatabasesQuery = {
  __typename: "ModelUserDatabaseConnection";
  items?: Array<{
    __typename: "UserDatabase";
    id: string;
    UserID: string;
    name?: string | null;
    lastname?: string | null;
    sex?: string | null;
    birthday?: string | null;
    hieght?: string | null;
    weight?: string | null;
    emailaddress?: string | null;
    phonenumber?: string | null;
    emergencycontact?: string | null;
    streetaddress?: string | null;
    city?: string | null;
    zipcode?: string | null;
    smoke?: string | null;
    alchol?: string | null;
    date?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetAllergiesQuery = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ListAllergiessQuery = {
  __typename: "ModelAllergiesConnection";
  items?: Array<{
    __typename: "Allergies";
    id: string;
    userid: string;
    allergyname: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetExperienceQuery = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type ListExperiencesQuery = {
  __typename: "ModelExperienceConnection";
  items?: Array<{
    __typename: "Experience";
    id: string;
    doctorID: string;
    Title: string;
    CompanyName: string;
    location: string;
    doctortype: DoctorType;
    Description: string;
    startdate: string;
    enddate: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetDoctorQuery = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorsQuery = {
  __typename: "ModelDoctorConnection";
  items?: Array<{
    __typename: "Doctor";
    id: string;
    UserID: string;
    doctortype: DoctorType;
    name?: string | null;
    about?: string | null;
    npi?: string | null;
    languagesspoken?: string | null;
    country?: string | null;
    localaddress?: string | null;
    paycut: string;
    state?: string | null;
    zipcode?: string | null;
    specialization?: string | null;
    yearsofexxperience?: string | null;
    gender?: string | null;
    status: DoctorProfileReview;
    insurance?: string | null;
    offlineconsultation?: boolean | null;
    appointmentscompleted: string;
    viewsonprofile: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCertificatesQuery = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type ListCertificatessQuery = {
  __typename: "ModelCertificatesConnection";
  items?: Array<{
    __typename: "Certificates";
    id: string;
    doctorID: string;
    imageurl: string;
    description: string;
    doctortype: DoctorType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetSlotsQuery = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type ListSlotssQuery = {
  __typename: "ModelSlotsConnection";
  items?: Array<{
    __typename: "Slots";
    id: string;
    doctorID: string;
    consulttime: string;
    starttime: string;
    endtime: string;
    consultationfees: string;
    conultationfesscurrency: string;
    videoconsultations: boolean;
    inpersonconsultation: boolean;
    videoandinpersonconsultation: boolean;
    consultationtimeedit: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    activeinactive?: SlotActiveInactive | null;
    doctortype: DoctorType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetInviteQuery = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type ListInvitesQuery = {
  __typename: "ModelInviteConnection";
  items?: Array<{
    __typename: "Invite";
    id: string;
    doctorID: string;
    UserID: string;
    message: string;
    invite: Request;
    date: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetEducationQuery = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEducationsQuery = {
  __typename: "ModelEducationConnection";
  items?: Array<{
    __typename: "Education";
    id: string;
    doctorID: string;
    nameofuniversity: string;
    fieldofstudy: string;
    doctortype: DoctorType;
    degree: string;
    startdate: string;
    enddate: string;
    gradepoint?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  userid: string;
  email: string;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  awsdate: string;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  userdatabase?: {
    __typename: "ModelUserDatabaseConnection";
    nextToken?: string | null;
  } | null;
  doctor?: {
    __typename: "ModelDoctorConnection";
    nextToken?: string | null;
  } | null;
  post?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBookMarkSubscription = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBookMarkSubscription = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBookMarkSubscription = {
  __typename: "BookMark";
  id: string;
  userid: string;
  bookmarktype: BookMarkType;
  discussiongroupid?: string | null;
  livebroadcastingid?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePaymentRequestSubscription = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePaymentRequestSubscription = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePaymentRequestSubscription = {
  __typename: "PaymentRequest";
  id: string;
  PaymentRequestType: PaymentRequestType;
  doctorID: string;
  date: string;
  appointmentid: string;
  request: PaymenttoDoctor;
  paidtodoctordate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePackagesBuySubscription = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePackagesBuySubscription = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePackagesBuySubscription = {
  __typename: "PackagesBuy";
  id: string;
  doctorID: string;
  userID: string;
  numberofappointmentsused: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  date: string;
  doctortype: DoctorType;
  PaymentCompletionStatus: PaymentCompletionStatus;
  PaymentMode?: PaymentMode | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePackagesSubscription = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePackagesSubscription = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePackagesSubscription = {
  __typename: "Packages";
  id: string;
  doctorID: string;
  consultationfees: string;
  conultationfesscurrency: string;
  numofappointments: string;
  validity: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBroadCastSubscription = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBroadCastSubscription = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBroadCastSubscription = {
  __typename: "BroadCast";
  id: string;
  doctorID: string;
  date: string;
  name: string;
  description: string;
  doctortype: DoctorType;
  BroadCastStatus: BroadCastStatus;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommunitiesSubscription = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommunitiesSubscription = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommunitiesSubscription = {
  __typename: "Communities";
  id: string;
  communityname: string;
  communityowner: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateContactUsSubscription = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateContactUsSubscription = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteContactUsSubscription = {
  __typename: "ContactUs";
  id: string;
  userid: string;
  date: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateNotificationsSubscription = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNotificationsSubscription = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNotificationsSubscription = {
  __typename: "Notifications";
  id: string;
  meetingid: string;
  request: Request;
  userid: string;
  date: string;
  doctorid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePaymentfromWalletSubscription = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePaymentfromWalletSubscription = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePaymentfromWalletSubscription = {
  __typename: "PaymentfromWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePaymentforWalletSubscription = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePaymentforWalletSubscription = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePaymentforWalletSubscription = {
  __typename: "PaymentforWallet";
  id: string;
  amount: string;
  currency: string;
  date: string;
  paymentfrom: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePaymentforAppointmentSubscription = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePaymentforAppointmentSubscription = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePaymentforAppointmentSubscription = {
  __typename: "PaymentforAppointment";
  id: string;
  amount: string;
  paymentfrom: string;
  currency: string;
  date: string;
  paymentto: string;
  appointmentid: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateWellnessPostSubscription = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateWellnessPostSubscription = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteWellnessPostSubscription = {
  __typename: "WellnessPost";
  id: string;
  title: string;
  image: boolean;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  UserID: string;
  postidreference: string;
  PostType: PostType;
  title: string;
  image: boolean;
  date: string;
  description: string;
  numberoflikes: string;
  imagetype?: VideoType | null;
  DoctorType?: DoctorType | null;
  likedbyusers?: {
    __typename: "ModelLikesConnection";
    nextToken?: string | null;
  } | null;
  comments?: {
    __typename: "ModelCommentsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLikesSubscription = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLikesSubscription = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLikesSubscription = {
  __typename: "Likes";
  id: string;
  PostID: string;
  date: string;
  UserId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentsSubscription = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentsSubscription = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentsSubscription = {
  __typename: "Comments";
  id: string;
  PostID: string;
  UserId: string;
  date: string;
  comment: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReplyCommentsSubscription = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReplyCommentsSubscription = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReplyCommentsSubscription = {
  __typename: "ReplyComments";
  id: string;
  PostID: string;
  UserId: string;
  comment: string;
  date: string;
  commentfrom: UserType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReportSubscription = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReportSubscription = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReportSubscription = {
  __typename: "Report";
  id: string;
  userID: string;
  doctorID?: string | null;
  meetingid?: string | null;
  reoporttype: ReportType;
  date: string;
  summnaryname?: string | null;
  summarydosage?: string | null;
  summnaryinstr?: string | null;
  summnaryreason?: string | null;
  rxname?: string | null;
  rxdosage?: string | null;
  rxinstr?: string | null;
  rxreason?: string | null;
  labsname?: string | null;
  labsdosage?: string | null;
  labsinstr?: string | null;
  labsreason?: string | null;
  visitnotes?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCoachPrescTaskSubscription = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCoachPrescTaskSubscription = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCoachPrescTaskSubscription = {
  __typename: "CoachPrescTask";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  weekday: WeekDay;
  task: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReportsSharedSubscription = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReportsSharedSubscription = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReportsSharedSubscription = {
  __typename: "ReportsShared";
  id: string;
  userID: string;
  doctorID: string;
  meetingid: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAppointmentSubscription = {
  __typename: "Appointment";
  id: string;
  userID: string;
  doctorID: string;
  paymentMode?: PaymentMode | null;
  packagebuyid?: string | null;
  consultationfees: string;
  PaymentCompletionStatus: PaymentCompletionStatus;
  conultationfesscurrency: string;
  starttime: string;
  slottime: string;
  date: string;
  meetingid: string;
  status: Status;
  request: Request;
  message?: string | null;
  personalConsult?: boolean | null;
  videoconsult?: boolean | null;
  cancelledbyuser?: boolean | null;
  cancellationdate?: string | null;
  cancelledbydoctor?: boolean | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommunityMessageSubscription = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommunityMessageSubscription = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommunityMessageSubscription = {
  __typename: "CommunityMessage";
  id: string;
  communityid: string;
  messagefrom: string;
  date: string;
  content: string;
  messagetype: MessageType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  DoctorsID: string;
  UserID: string;
  messagetype: MessageType;
  content?: string | null;
  currentmessage: string;
  readbydoctor: boolean;
  imageboolean: boolean;
  readbyuser: boolean;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUserDatabaseSubscription = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserDatabaseSubscription = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserDatabaseSubscription = {
  __typename: "UserDatabase";
  id: string;
  UserID: string;
  name?: string | null;
  lastname?: string | null;
  sex?: string | null;
  birthday?: string | null;
  hieght?: string | null;
  weight?: string | null;
  emailaddress?: string | null;
  phonenumber?: string | null;
  emergencycontact?: string | null;
  streetaddress?: string | null;
  city?: string | null;
  zipcode?: string | null;
  smoke?: string | null;
  alchol?: string | null;
  date?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateAllergiesSubscription = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAllergiesSubscription = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAllergiesSubscription = {
  __typename: "Allergies";
  id: string;
  userid: string;
  allergyname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateExperienceSubscription = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateExperienceSubscription = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteExperienceSubscription = {
  __typename: "Experience";
  id: string;
  doctorID: string;
  Title: string;
  CompanyName: string;
  location: string;
  doctortype: DoctorType;
  Description: string;
  startdate: string;
  enddate: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  UserID: string;
  doctortype: DoctorType;
  name?: string | null;
  about?: string | null;
  npi?: string | null;
  languagesspoken?: string | null;
  country?: string | null;
  localaddress?: string | null;
  paycut: string;
  state?: string | null;
  zipcode?: string | null;
  specialization?: string | null;
  yearsofexxperience?: string | null;
  gender?: string | null;
  status: DoctorProfileReview;
  insurance?: string | null;
  offlineconsultation?: boolean | null;
  appointmentscompleted: string;
  viewsonprofile: string;
  education?: {
    __typename: "ModelEducationConnection";
    nextToken?: string | null;
  } | null;
  experience?: {
    __typename: "ModelExperienceConnection";
    nextToken?: string | null;
  } | null;
  certificates?: {
    __typename: "ModelCertificatesConnection";
    nextToken?: string | null;
  } | null;
  appointment?: {
    __typename: "ModelAppointmentConnection";
    nextToken?: string | null;
  } | null;
  message?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCertificatesSubscription = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCertificatesSubscription = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCertificatesSubscription = {
  __typename: "Certificates";
  id: string;
  doctorID: string;
  imageurl: string;
  description: string;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSlotsSubscription = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSlotsSubscription = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSlotsSubscription = {
  __typename: "Slots";
  id: string;
  doctorID: string;
  consulttime: string;
  starttime: string;
  endtime: string;
  consultationfees: string;
  conultationfesscurrency: string;
  videoconsultations: boolean;
  inpersonconsultation: boolean;
  videoandinpersonconsultation: boolean;
  consultationtimeedit: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  activeinactive?: SlotActiveInactive | null;
  doctortype: DoctorType;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateInviteSubscription = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInviteSubscription = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInviteSubscription = {
  __typename: "Invite";
  id: string;
  doctorID: string;
  UserID: string;
  message: string;
  invite: Request;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEducationSubscription = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEducationSubscription = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEducationSubscription = {
  __typename: "Education";
  id: string;
  doctorID: string;
  nameofuniversity: string;
  fieldofstudy: string;
  doctortype: DoctorType;
  degree: string;
  startdate: string;
  enddate: string;
  gradepoint?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateBookMark(
    input: CreateBookMarkInput,
    condition?: ModelBookMarkConditionInput
  ): Promise<CreateBookMarkMutation> {
    const statement = `mutation CreateBookMark($input: CreateBookMarkInput!, $condition: ModelBookMarkConditionInput) {
        createBookMark(input: $input, condition: $condition) {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookMarkMutation>response.data.createBookMark;
  }
  async UpdateBookMark(
    input: UpdateBookMarkInput,
    condition?: ModelBookMarkConditionInput
  ): Promise<UpdateBookMarkMutation> {
    const statement = `mutation UpdateBookMark($input: UpdateBookMarkInput!, $condition: ModelBookMarkConditionInput) {
        updateBookMark(input: $input, condition: $condition) {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookMarkMutation>response.data.updateBookMark;
  }
  async DeleteBookMark(
    input: DeleteBookMarkInput,
    condition?: ModelBookMarkConditionInput
  ): Promise<DeleteBookMarkMutation> {
    const statement = `mutation DeleteBookMark($input: DeleteBookMarkInput!, $condition: ModelBookMarkConditionInput) {
        deleteBookMark(input: $input, condition: $condition) {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookMarkMutation>response.data.deleteBookMark;
  }
  async CreatePaymentRequest(
    input: CreatePaymentRequestInput,
    condition?: ModelPaymentRequestConditionInput
  ): Promise<CreatePaymentRequestMutation> {
    const statement = `mutation CreatePaymentRequest($input: CreatePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
        createPaymentRequest(input: $input, condition: $condition) {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePaymentRequestMutation>response.data.createPaymentRequest;
  }
  async UpdatePaymentRequest(
    input: UpdatePaymentRequestInput,
    condition?: ModelPaymentRequestConditionInput
  ): Promise<UpdatePaymentRequestMutation> {
    const statement = `mutation UpdatePaymentRequest($input: UpdatePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
        updatePaymentRequest(input: $input, condition: $condition) {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePaymentRequestMutation>response.data.updatePaymentRequest;
  }
  async DeletePaymentRequest(
    input: DeletePaymentRequestInput,
    condition?: ModelPaymentRequestConditionInput
  ): Promise<DeletePaymentRequestMutation> {
    const statement = `mutation DeletePaymentRequest($input: DeletePaymentRequestInput!, $condition: ModelPaymentRequestConditionInput) {
        deletePaymentRequest(input: $input, condition: $condition) {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePaymentRequestMutation>response.data.deletePaymentRequest;
  }
  async CreatePackagesBuy(
    input: CreatePackagesBuyInput,
    condition?: ModelPackagesBuyConditionInput
  ): Promise<CreatePackagesBuyMutation> {
    const statement = `mutation CreatePackagesBuy($input: CreatePackagesBuyInput!, $condition: ModelPackagesBuyConditionInput) {
        createPackagesBuy(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePackagesBuyMutation>response.data.createPackagesBuy;
  }
  async UpdatePackagesBuy(
    input: UpdatePackagesBuyInput,
    condition?: ModelPackagesBuyConditionInput
  ): Promise<UpdatePackagesBuyMutation> {
    const statement = `mutation UpdatePackagesBuy($input: UpdatePackagesBuyInput!, $condition: ModelPackagesBuyConditionInput) {
        updatePackagesBuy(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePackagesBuyMutation>response.data.updatePackagesBuy;
  }
  async DeletePackagesBuy(
    input: DeletePackagesBuyInput,
    condition?: ModelPackagesBuyConditionInput
  ): Promise<DeletePackagesBuyMutation> {
    const statement = `mutation DeletePackagesBuy($input: DeletePackagesBuyInput!, $condition: ModelPackagesBuyConditionInput) {
        deletePackagesBuy(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePackagesBuyMutation>response.data.deletePackagesBuy;
  }
  async CreatePackages(
    input: CreatePackagesInput,
    condition?: ModelPackagesConditionInput
  ): Promise<CreatePackagesMutation> {
    const statement = `mutation CreatePackages($input: CreatePackagesInput!, $condition: ModelPackagesConditionInput) {
        createPackages(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePackagesMutation>response.data.createPackages;
  }
  async UpdatePackages(
    input: UpdatePackagesInput,
    condition?: ModelPackagesConditionInput
  ): Promise<UpdatePackagesMutation> {
    const statement = `mutation UpdatePackages($input: UpdatePackagesInput!, $condition: ModelPackagesConditionInput) {
        updatePackages(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePackagesMutation>response.data.updatePackages;
  }
  async DeletePackages(
    input: DeletePackagesInput,
    condition?: ModelPackagesConditionInput
  ): Promise<DeletePackagesMutation> {
    const statement = `mutation DeletePackages($input: DeletePackagesInput!, $condition: ModelPackagesConditionInput) {
        deletePackages(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePackagesMutation>response.data.deletePackages;
  }
  async CreateBroadCast(
    input: CreateBroadCastInput,
    condition?: ModelBroadCastConditionInput
  ): Promise<CreateBroadCastMutation> {
    const statement = `mutation CreateBroadCast($input: CreateBroadCastInput!, $condition: ModelBroadCastConditionInput) {
        createBroadCast(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBroadCastMutation>response.data.createBroadCast;
  }
  async UpdateBroadCast(
    input: UpdateBroadCastInput,
    condition?: ModelBroadCastConditionInput
  ): Promise<UpdateBroadCastMutation> {
    const statement = `mutation UpdateBroadCast($input: UpdateBroadCastInput!, $condition: ModelBroadCastConditionInput) {
        updateBroadCast(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBroadCastMutation>response.data.updateBroadCast;
  }
  async DeleteBroadCast(
    input: DeleteBroadCastInput,
    condition?: ModelBroadCastConditionInput
  ): Promise<DeleteBroadCastMutation> {
    const statement = `mutation DeleteBroadCast($input: DeleteBroadCastInput!, $condition: ModelBroadCastConditionInput) {
        deleteBroadCast(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBroadCastMutation>response.data.deleteBroadCast;
  }
  async CreateCommunities(
    input: CreateCommunitiesInput,
    condition?: ModelCommunitiesConditionInput
  ): Promise<CreateCommunitiesMutation> {
    const statement = `mutation CreateCommunities($input: CreateCommunitiesInput!, $condition: ModelCommunitiesConditionInput) {
        createCommunities(input: $input, condition: $condition) {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommunitiesMutation>response.data.createCommunities;
  }
  async UpdateCommunities(
    input: UpdateCommunitiesInput,
    condition?: ModelCommunitiesConditionInput
  ): Promise<UpdateCommunitiesMutation> {
    const statement = `mutation UpdateCommunities($input: UpdateCommunitiesInput!, $condition: ModelCommunitiesConditionInput) {
        updateCommunities(input: $input, condition: $condition) {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommunitiesMutation>response.data.updateCommunities;
  }
  async DeleteCommunities(
    input: DeleteCommunitiesInput,
    condition?: ModelCommunitiesConditionInput
  ): Promise<DeleteCommunitiesMutation> {
    const statement = `mutation DeleteCommunities($input: DeleteCommunitiesInput!, $condition: ModelCommunitiesConditionInput) {
        deleteCommunities(input: $input, condition: $condition) {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommunitiesMutation>response.data.deleteCommunities;
  }
  async CreateContactUs(
    input: CreateContactUsInput,
    condition?: ModelContactUsConditionInput
  ): Promise<CreateContactUsMutation> {
    const statement = `mutation CreateContactUs($input: CreateContactUsInput!, $condition: ModelContactUsConditionInput) {
        createContactUs(input: $input, condition: $condition) {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateContactUsMutation>response.data.createContactUs;
  }
  async UpdateContactUs(
    input: UpdateContactUsInput,
    condition?: ModelContactUsConditionInput
  ): Promise<UpdateContactUsMutation> {
    const statement = `mutation UpdateContactUs($input: UpdateContactUsInput!, $condition: ModelContactUsConditionInput) {
        updateContactUs(input: $input, condition: $condition) {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateContactUsMutation>response.data.updateContactUs;
  }
  async DeleteContactUs(
    input: DeleteContactUsInput,
    condition?: ModelContactUsConditionInput
  ): Promise<DeleteContactUsMutation> {
    const statement = `mutation DeleteContactUs($input: DeleteContactUsInput!, $condition: ModelContactUsConditionInput) {
        deleteContactUs(input: $input, condition: $condition) {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteContactUsMutation>response.data.deleteContactUs;
  }
  async CreateNotifications(
    input: CreateNotificationsInput,
    condition?: ModelNotificationsConditionInput
  ): Promise<CreateNotificationsMutation> {
    const statement = `mutation CreateNotifications($input: CreateNotificationsInput!, $condition: ModelNotificationsConditionInput) {
        createNotifications(input: $input, condition: $condition) {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNotificationsMutation>response.data.createNotifications;
  }
  async UpdateNotifications(
    input: UpdateNotificationsInput,
    condition?: ModelNotificationsConditionInput
  ): Promise<UpdateNotificationsMutation> {
    const statement = `mutation UpdateNotifications($input: UpdateNotificationsInput!, $condition: ModelNotificationsConditionInput) {
        updateNotifications(input: $input, condition: $condition) {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNotificationsMutation>response.data.updateNotifications;
  }
  async DeleteNotifications(
    input: DeleteNotificationsInput,
    condition?: ModelNotificationsConditionInput
  ): Promise<DeleteNotificationsMutation> {
    const statement = `mutation DeleteNotifications($input: DeleteNotificationsInput!, $condition: ModelNotificationsConditionInput) {
        deleteNotifications(input: $input, condition: $condition) {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNotificationsMutation>response.data.deleteNotifications;
  }
  async CreatePaymentfromWallet(
    input: CreatePaymentfromWalletInput,
    condition?: ModelPaymentfromWalletConditionInput
  ): Promise<CreatePaymentfromWalletMutation> {
    const statement = `mutation CreatePaymentfromWallet($input: CreatePaymentfromWalletInput!, $condition: ModelPaymentfromWalletConditionInput) {
        createPaymentfromWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePaymentfromWalletMutation>(
      response.data.createPaymentfromWallet
    );
  }
  async UpdatePaymentfromWallet(
    input: UpdatePaymentfromWalletInput,
    condition?: ModelPaymentfromWalletConditionInput
  ): Promise<UpdatePaymentfromWalletMutation> {
    const statement = `mutation UpdatePaymentfromWallet($input: UpdatePaymentfromWalletInput!, $condition: ModelPaymentfromWalletConditionInput) {
        updatePaymentfromWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePaymentfromWalletMutation>(
      response.data.updatePaymentfromWallet
    );
  }
  async DeletePaymentfromWallet(
    input: DeletePaymentfromWalletInput,
    condition?: ModelPaymentfromWalletConditionInput
  ): Promise<DeletePaymentfromWalletMutation> {
    const statement = `mutation DeletePaymentfromWallet($input: DeletePaymentfromWalletInput!, $condition: ModelPaymentfromWalletConditionInput) {
        deletePaymentfromWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePaymentfromWalletMutation>(
      response.data.deletePaymentfromWallet
    );
  }
  async CreatePaymentforWallet(
    input: CreatePaymentforWalletInput,
    condition?: ModelPaymentforWalletConditionInput
  ): Promise<CreatePaymentforWalletMutation> {
    const statement = `mutation CreatePaymentforWallet($input: CreatePaymentforWalletInput!, $condition: ModelPaymentforWalletConditionInput) {
        createPaymentforWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePaymentforWalletMutation>response.data.createPaymentforWallet;
  }
  async UpdatePaymentforWallet(
    input: UpdatePaymentforWalletInput,
    condition?: ModelPaymentforWalletConditionInput
  ): Promise<UpdatePaymentforWalletMutation> {
    const statement = `mutation UpdatePaymentforWallet($input: UpdatePaymentforWalletInput!, $condition: ModelPaymentforWalletConditionInput) {
        updatePaymentforWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePaymentforWalletMutation>response.data.updatePaymentforWallet;
  }
  async DeletePaymentforWallet(
    input: DeletePaymentforWalletInput,
    condition?: ModelPaymentforWalletConditionInput
  ): Promise<DeletePaymentforWalletMutation> {
    const statement = `mutation DeletePaymentforWallet($input: DeletePaymentforWalletInput!, $condition: ModelPaymentforWalletConditionInput) {
        deletePaymentforWallet(input: $input, condition: $condition) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePaymentforWalletMutation>response.data.deletePaymentforWallet;
  }
  async CreatePaymentforAppointment(
    input: CreatePaymentforAppointmentInput,
    condition?: ModelPaymentforAppointmentConditionInput
  ): Promise<CreatePaymentforAppointmentMutation> {
    const statement = `mutation CreatePaymentforAppointment($input: CreatePaymentforAppointmentInput!, $condition: ModelPaymentforAppointmentConditionInput) {
        createPaymentforAppointment(input: $input, condition: $condition) {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePaymentforAppointmentMutation>(
      response.data.createPaymentforAppointment
    );
  }
  async UpdatePaymentforAppointment(
    input: UpdatePaymentforAppointmentInput,
    condition?: ModelPaymentforAppointmentConditionInput
  ): Promise<UpdatePaymentforAppointmentMutation> {
    const statement = `mutation UpdatePaymentforAppointment($input: UpdatePaymentforAppointmentInput!, $condition: ModelPaymentforAppointmentConditionInput) {
        updatePaymentforAppointment(input: $input, condition: $condition) {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePaymentforAppointmentMutation>(
      response.data.updatePaymentforAppointment
    );
  }
  async DeletePaymentforAppointment(
    input: DeletePaymentforAppointmentInput,
    condition?: ModelPaymentforAppointmentConditionInput
  ): Promise<DeletePaymentforAppointmentMutation> {
    const statement = `mutation DeletePaymentforAppointment($input: DeletePaymentforAppointmentInput!, $condition: ModelPaymentforAppointmentConditionInput) {
        deletePaymentforAppointment(input: $input, condition: $condition) {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePaymentforAppointmentMutation>(
      response.data.deletePaymentforAppointment
    );
  }
  async CreateWellnessPost(
    input: CreateWellnessPostInput,
    condition?: ModelWellnessPostConditionInput
  ): Promise<CreateWellnessPostMutation> {
    const statement = `mutation CreateWellnessPost($input: CreateWellnessPostInput!, $condition: ModelWellnessPostConditionInput) {
        createWellnessPost(input: $input, condition: $condition) {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateWellnessPostMutation>response.data.createWellnessPost;
  }
  async UpdateWellnessPost(
    input: UpdateWellnessPostInput,
    condition?: ModelWellnessPostConditionInput
  ): Promise<UpdateWellnessPostMutation> {
    const statement = `mutation UpdateWellnessPost($input: UpdateWellnessPostInput!, $condition: ModelWellnessPostConditionInput) {
        updateWellnessPost(input: $input, condition: $condition) {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateWellnessPostMutation>response.data.updateWellnessPost;
  }
  async DeleteWellnessPost(
    input: DeleteWellnessPostInput,
    condition?: ModelWellnessPostConditionInput
  ): Promise<DeleteWellnessPostMutation> {
    const statement = `mutation DeleteWellnessPost($input: DeleteWellnessPostInput!, $condition: ModelWellnessPostConditionInput) {
        deleteWellnessPost(input: $input, condition: $condition) {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteWellnessPostMutation>response.data.deleteWellnessPost;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateLikes(
    input: CreateLikesInput,
    condition?: ModelLikesConditionInput
  ): Promise<CreateLikesMutation> {
    const statement = `mutation CreateLikes($input: CreateLikesInput!, $condition: ModelLikesConditionInput) {
        createLikes(input: $input, condition: $condition) {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLikesMutation>response.data.createLikes;
  }
  async UpdateLikes(
    input: UpdateLikesInput,
    condition?: ModelLikesConditionInput
  ): Promise<UpdateLikesMutation> {
    const statement = `mutation UpdateLikes($input: UpdateLikesInput!, $condition: ModelLikesConditionInput) {
        updateLikes(input: $input, condition: $condition) {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLikesMutation>response.data.updateLikes;
  }
  async DeleteLikes(
    input: DeleteLikesInput,
    condition?: ModelLikesConditionInput
  ): Promise<DeleteLikesMutation> {
    const statement = `mutation DeleteLikes($input: DeleteLikesInput!, $condition: ModelLikesConditionInput) {
        deleteLikes(input: $input, condition: $condition) {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLikesMutation>response.data.deleteLikes;
  }
  async CreateComments(
    input: CreateCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<CreateCommentsMutation> {
    const statement = `mutation CreateComments($input: CreateCommentsInput!, $condition: ModelCommentsConditionInput) {
        createComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentsMutation>response.data.createComments;
  }
  async UpdateComments(
    input: UpdateCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<UpdateCommentsMutation> {
    const statement = `mutation UpdateComments($input: UpdateCommentsInput!, $condition: ModelCommentsConditionInput) {
        updateComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentsMutation>response.data.updateComments;
  }
  async DeleteComments(
    input: DeleteCommentsInput,
    condition?: ModelCommentsConditionInput
  ): Promise<DeleteCommentsMutation> {
    const statement = `mutation DeleteComments($input: DeleteCommentsInput!, $condition: ModelCommentsConditionInput) {
        deleteComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentsMutation>response.data.deleteComments;
  }
  async CreateReplyComments(
    input: CreateReplyCommentsInput,
    condition?: ModelReplyCommentsConditionInput
  ): Promise<CreateReplyCommentsMutation> {
    const statement = `mutation CreateReplyComments($input: CreateReplyCommentsInput!, $condition: ModelReplyCommentsConditionInput) {
        createReplyComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReplyCommentsMutation>response.data.createReplyComments;
  }
  async UpdateReplyComments(
    input: UpdateReplyCommentsInput,
    condition?: ModelReplyCommentsConditionInput
  ): Promise<UpdateReplyCommentsMutation> {
    const statement = `mutation UpdateReplyComments($input: UpdateReplyCommentsInput!, $condition: ModelReplyCommentsConditionInput) {
        updateReplyComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReplyCommentsMutation>response.data.updateReplyComments;
  }
  async DeleteReplyComments(
    input: DeleteReplyCommentsInput,
    condition?: ModelReplyCommentsConditionInput
  ): Promise<DeleteReplyCommentsMutation> {
    const statement = `mutation DeleteReplyComments($input: DeleteReplyCommentsInput!, $condition: ModelReplyCommentsConditionInput) {
        deleteReplyComments(input: $input, condition: $condition) {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReplyCommentsMutation>response.data.deleteReplyComments;
  }
  async CreateReport(
    input: CreateReportInput,
    condition?: ModelReportConditionInput
  ): Promise<CreateReportMutation> {
    const statement = `mutation CreateReport($input: CreateReportInput!, $condition: ModelReportConditionInput) {
        createReport(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReportMutation>response.data.createReport;
  }
  async UpdateReport(
    input: UpdateReportInput,
    condition?: ModelReportConditionInput
  ): Promise<UpdateReportMutation> {
    const statement = `mutation UpdateReport($input: UpdateReportInput!, $condition: ModelReportConditionInput) {
        updateReport(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReportMutation>response.data.updateReport;
  }
  async DeleteReport(
    input: DeleteReportInput,
    condition?: ModelReportConditionInput
  ): Promise<DeleteReportMutation> {
    const statement = `mutation DeleteReport($input: DeleteReportInput!, $condition: ModelReportConditionInput) {
        deleteReport(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReportMutation>response.data.deleteReport;
  }
  async CreateCoachPrescTask(
    input: CreateCoachPrescTaskInput,
    condition?: ModelCoachPrescTaskConditionInput
  ): Promise<CreateCoachPrescTaskMutation> {
    const statement = `mutation CreateCoachPrescTask($input: CreateCoachPrescTaskInput!, $condition: ModelCoachPrescTaskConditionInput) {
        createCoachPrescTask(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCoachPrescTaskMutation>response.data.createCoachPrescTask;
  }
  async UpdateCoachPrescTask(
    input: UpdateCoachPrescTaskInput,
    condition?: ModelCoachPrescTaskConditionInput
  ): Promise<UpdateCoachPrescTaskMutation> {
    const statement = `mutation UpdateCoachPrescTask($input: UpdateCoachPrescTaskInput!, $condition: ModelCoachPrescTaskConditionInput) {
        updateCoachPrescTask(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCoachPrescTaskMutation>response.data.updateCoachPrescTask;
  }
  async DeleteCoachPrescTask(
    input: DeleteCoachPrescTaskInput,
    condition?: ModelCoachPrescTaskConditionInput
  ): Promise<DeleteCoachPrescTaskMutation> {
    const statement = `mutation DeleteCoachPrescTask($input: DeleteCoachPrescTaskInput!, $condition: ModelCoachPrescTaskConditionInput) {
        deleteCoachPrescTask(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCoachPrescTaskMutation>response.data.deleteCoachPrescTask;
  }
  async CreateReportsShared(
    input: CreateReportsSharedInput,
    condition?: ModelReportsSharedConditionInput
  ): Promise<CreateReportsSharedMutation> {
    const statement = `mutation CreateReportsShared($input: CreateReportsSharedInput!, $condition: ModelReportsSharedConditionInput) {
        createReportsShared(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateReportsSharedMutation>response.data.createReportsShared;
  }
  async UpdateReportsShared(
    input: UpdateReportsSharedInput,
    condition?: ModelReportsSharedConditionInput
  ): Promise<UpdateReportsSharedMutation> {
    const statement = `mutation UpdateReportsShared($input: UpdateReportsSharedInput!, $condition: ModelReportsSharedConditionInput) {
        updateReportsShared(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateReportsSharedMutation>response.data.updateReportsShared;
  }
  async DeleteReportsShared(
    input: DeleteReportsSharedInput,
    condition?: ModelReportsSharedConditionInput
  ): Promise<DeleteReportsSharedMutation> {
    const statement = `mutation DeleteReportsShared($input: DeleteReportsSharedInput!, $condition: ModelReportsSharedConditionInput) {
        deleteReportsShared(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteReportsSharedMutation>response.data.deleteReportsShared;
  }
  async CreateAppointment(
    input: CreateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<CreateAppointmentMutation> {
    const statement = `mutation CreateAppointment($input: CreateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        createAppointment(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAppointmentMutation>response.data.createAppointment;
  }
  async UpdateAppointment(
    input: UpdateAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<UpdateAppointmentMutation> {
    const statement = `mutation UpdateAppointment($input: UpdateAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        updateAppointment(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAppointmentMutation>response.data.updateAppointment;
  }
  async DeleteAppointment(
    input: DeleteAppointmentInput,
    condition?: ModelAppointmentConditionInput
  ): Promise<DeleteAppointmentMutation> {
    const statement = `mutation DeleteAppointment($input: DeleteAppointmentInput!, $condition: ModelAppointmentConditionInput) {
        deleteAppointment(input: $input, condition: $condition) {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAppointmentMutation>response.data.deleteAppointment;
  }
  async CreateCommunityMessage(
    input: CreateCommunityMessageInput,
    condition?: ModelCommunityMessageConditionInput
  ): Promise<CreateCommunityMessageMutation> {
    const statement = `mutation CreateCommunityMessage($input: CreateCommunityMessageInput!, $condition: ModelCommunityMessageConditionInput) {
        createCommunityMessage(input: $input, condition: $condition) {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommunityMessageMutation>response.data.createCommunityMessage;
  }
  async UpdateCommunityMessage(
    input: UpdateCommunityMessageInput,
    condition?: ModelCommunityMessageConditionInput
  ): Promise<UpdateCommunityMessageMutation> {
    const statement = `mutation UpdateCommunityMessage($input: UpdateCommunityMessageInput!, $condition: ModelCommunityMessageConditionInput) {
        updateCommunityMessage(input: $input, condition: $condition) {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommunityMessageMutation>response.data.updateCommunityMessage;
  }
  async DeleteCommunityMessage(
    input: DeleteCommunityMessageInput,
    condition?: ModelCommunityMessageConditionInput
  ): Promise<DeleteCommunityMessageMutation> {
    const statement = `mutation DeleteCommunityMessage($input: DeleteCommunityMessageInput!, $condition: ModelCommunityMessageConditionInput) {
        deleteCommunityMessage(input: $input, condition: $condition) {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommunityMessageMutation>response.data.deleteCommunityMessage;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateUserDatabase(
    input: CreateUserDatabaseInput,
    condition?: ModelUserDatabaseConditionInput
  ): Promise<CreateUserDatabaseMutation> {
    const statement = `mutation CreateUserDatabase($input: CreateUserDatabaseInput!, $condition: ModelUserDatabaseConditionInput) {
        createUserDatabase(input: $input, condition: $condition) {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserDatabaseMutation>response.data.createUserDatabase;
  }
  async UpdateUserDatabase(
    input: UpdateUserDatabaseInput,
    condition?: ModelUserDatabaseConditionInput
  ): Promise<UpdateUserDatabaseMutation> {
    const statement = `mutation UpdateUserDatabase($input: UpdateUserDatabaseInput!, $condition: ModelUserDatabaseConditionInput) {
        updateUserDatabase(input: $input, condition: $condition) {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserDatabaseMutation>response.data.updateUserDatabase;
  }
  async DeleteUserDatabase(
    input: DeleteUserDatabaseInput,
    condition?: ModelUserDatabaseConditionInput
  ): Promise<DeleteUserDatabaseMutation> {
    const statement = `mutation DeleteUserDatabase($input: DeleteUserDatabaseInput!, $condition: ModelUserDatabaseConditionInput) {
        deleteUserDatabase(input: $input, condition: $condition) {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserDatabaseMutation>response.data.deleteUserDatabase;
  }
  async CreateAllergies(
    input: CreateAllergiesInput,
    condition?: ModelAllergiesConditionInput
  ): Promise<CreateAllergiesMutation> {
    const statement = `mutation CreateAllergies($input: CreateAllergiesInput!, $condition: ModelAllergiesConditionInput) {
        createAllergies(input: $input, condition: $condition) {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAllergiesMutation>response.data.createAllergies;
  }
  async UpdateAllergies(
    input: UpdateAllergiesInput,
    condition?: ModelAllergiesConditionInput
  ): Promise<UpdateAllergiesMutation> {
    const statement = `mutation UpdateAllergies($input: UpdateAllergiesInput!, $condition: ModelAllergiesConditionInput) {
        updateAllergies(input: $input, condition: $condition) {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAllergiesMutation>response.data.updateAllergies;
  }
  async DeleteAllergies(
    input: DeleteAllergiesInput,
    condition?: ModelAllergiesConditionInput
  ): Promise<DeleteAllergiesMutation> {
    const statement = `mutation DeleteAllergies($input: DeleteAllergiesInput!, $condition: ModelAllergiesConditionInput) {
        deleteAllergies(input: $input, condition: $condition) {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAllergiesMutation>response.data.deleteAllergies;
  }
  async CreateExperience(
    input: CreateExperienceInput,
    condition?: ModelExperienceConditionInput
  ): Promise<CreateExperienceMutation> {
    const statement = `mutation CreateExperience($input: CreateExperienceInput!, $condition: ModelExperienceConditionInput) {
        createExperience(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateExperienceMutation>response.data.createExperience;
  }
  async UpdateExperience(
    input: UpdateExperienceInput,
    condition?: ModelExperienceConditionInput
  ): Promise<UpdateExperienceMutation> {
    const statement = `mutation UpdateExperience($input: UpdateExperienceInput!, $condition: ModelExperienceConditionInput) {
        updateExperience(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateExperienceMutation>response.data.updateExperience;
  }
  async DeleteExperience(
    input: DeleteExperienceInput,
    condition?: ModelExperienceConditionInput
  ): Promise<DeleteExperienceMutation> {
    const statement = `mutation DeleteExperience($input: DeleteExperienceInput!, $condition: ModelExperienceConditionInput) {
        deleteExperience(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteExperienceMutation>response.data.deleteExperience;
  }
  async CreateDoctor(
    input: CreateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<CreateDoctorMutation> {
    const statement = `mutation CreateDoctor($input: CreateDoctorInput!, $condition: ModelDoctorConditionInput) {
        createDoctor(input: $input, condition: $condition) {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorMutation>response.data.createDoctor;
  }
  async UpdateDoctor(
    input: UpdateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<UpdateDoctorMutation> {
    const statement = `mutation UpdateDoctor($input: UpdateDoctorInput!, $condition: ModelDoctorConditionInput) {
        updateDoctor(input: $input, condition: $condition) {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorMutation>response.data.updateDoctor;
  }
  async DeleteDoctor(
    input: DeleteDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<DeleteDoctorMutation> {
    const statement = `mutation DeleteDoctor($input: DeleteDoctorInput!, $condition: ModelDoctorConditionInput) {
        deleteDoctor(input: $input, condition: $condition) {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorMutation>response.data.deleteDoctor;
  }
  async CreateCertificates(
    input: CreateCertificatesInput,
    condition?: ModelCertificatesConditionInput
  ): Promise<CreateCertificatesMutation> {
    const statement = `mutation CreateCertificates($input: CreateCertificatesInput!, $condition: ModelCertificatesConditionInput) {
        createCertificates(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCertificatesMutation>response.data.createCertificates;
  }
  async UpdateCertificates(
    input: UpdateCertificatesInput,
    condition?: ModelCertificatesConditionInput
  ): Promise<UpdateCertificatesMutation> {
    const statement = `mutation UpdateCertificates($input: UpdateCertificatesInput!, $condition: ModelCertificatesConditionInput) {
        updateCertificates(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCertificatesMutation>response.data.updateCertificates;
  }
  async DeleteCertificates(
    input: DeleteCertificatesInput,
    condition?: ModelCertificatesConditionInput
  ): Promise<DeleteCertificatesMutation> {
    const statement = `mutation DeleteCertificates($input: DeleteCertificatesInput!, $condition: ModelCertificatesConditionInput) {
        deleteCertificates(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCertificatesMutation>response.data.deleteCertificates;
  }
  async CreateSlots(
    input: CreateSlotsInput,
    condition?: ModelSlotsConditionInput
  ): Promise<CreateSlotsMutation> {
    const statement = `mutation CreateSlots($input: CreateSlotsInput!, $condition: ModelSlotsConditionInput) {
        createSlots(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSlotsMutation>response.data.createSlots;
  }
  async UpdateSlots(
    input: UpdateSlotsInput,
    condition?: ModelSlotsConditionInput
  ): Promise<UpdateSlotsMutation> {
    const statement = `mutation UpdateSlots($input: UpdateSlotsInput!, $condition: ModelSlotsConditionInput) {
        updateSlots(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSlotsMutation>response.data.updateSlots;
  }
  async DeleteSlots(
    input: DeleteSlotsInput,
    condition?: ModelSlotsConditionInput
  ): Promise<DeleteSlotsMutation> {
    const statement = `mutation DeleteSlots($input: DeleteSlotsInput!, $condition: ModelSlotsConditionInput) {
        deleteSlots(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSlotsMutation>response.data.deleteSlots;
  }
  async CreateInvite(
    input: CreateInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<CreateInviteMutation> {
    const statement = `mutation CreateInvite($input: CreateInviteInput!, $condition: ModelInviteConditionInput) {
        createInvite(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInviteMutation>response.data.createInvite;
  }
  async UpdateInvite(
    input: UpdateInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<UpdateInviteMutation> {
    const statement = `mutation UpdateInvite($input: UpdateInviteInput!, $condition: ModelInviteConditionInput) {
        updateInvite(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInviteMutation>response.data.updateInvite;
  }
  async DeleteInvite(
    input: DeleteInviteInput,
    condition?: ModelInviteConditionInput
  ): Promise<DeleteInviteMutation> {
    const statement = `mutation DeleteInvite($input: DeleteInviteInput!, $condition: ModelInviteConditionInput) {
        deleteInvite(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInviteMutation>response.data.deleteInvite;
  }
  async CreateEducation(
    input: CreateEducationInput,
    condition?: ModelEducationConditionInput
  ): Promise<CreateEducationMutation> {
    const statement = `mutation CreateEducation($input: CreateEducationInput!, $condition: ModelEducationConditionInput) {
        createEducation(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEducationMutation>response.data.createEducation;
  }
  async UpdateEducation(
    input: UpdateEducationInput,
    condition?: ModelEducationConditionInput
  ): Promise<UpdateEducationMutation> {
    const statement = `mutation UpdateEducation($input: UpdateEducationInput!, $condition: ModelEducationConditionInput) {
        updateEducation(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEducationMutation>response.data.updateEducation;
  }
  async DeleteEducation(
    input: DeleteEducationInput,
    condition?: ModelEducationConditionInput
  ): Promise<DeleteEducationMutation> {
    const statement = `mutation DeleteEducation($input: DeleteEducationInput!, $condition: ModelEducationConditionInput) {
        deleteEducation(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEducationMutation>response.data.deleteEducation;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            userid
            email
            awsdate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetBookMark(id: string): Promise<GetBookMarkQuery> {
    const statement = `query GetBookMark($id: ID!) {
        getBookMark(id: $id) {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookMarkQuery>response.data.getBookMark;
  }
  async ListBookMarks(
    filter?: ModelBookMarkFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBookMarksQuery> {
    const statement = `query ListBookMarks($filter: ModelBookMarkFilterInput, $limit: Int, $nextToken: String) {
        listBookMarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userid
            bookmarktype
            discussiongroupid
            livebroadcastingid
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBookMarksQuery>response.data.listBookMarks;
  }
  async GetPaymentRequest(id: string): Promise<GetPaymentRequestQuery> {
    const statement = `query GetPaymentRequest($id: ID!) {
        getPaymentRequest(id: $id) {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPaymentRequestQuery>response.data.getPaymentRequest;
  }
  async ListPaymentRequests(
    filter?: ModelPaymentRequestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPaymentRequestsQuery> {
    const statement = `query ListPaymentRequests($filter: ModelPaymentRequestFilterInput, $limit: Int, $nextToken: String) {
        listPaymentRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            PaymentRequestType
            doctorID
            date
            appointmentid
            request
            paidtodoctordate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPaymentRequestsQuery>response.data.listPaymentRequests;
  }
  async GetPackagesBuy(id: string): Promise<GetPackagesBuyQuery> {
    const statement = `query GetPackagesBuy($id: ID!) {
        getPackagesBuy(id: $id) {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPackagesBuyQuery>response.data.getPackagesBuy;
  }
  async ListPackagesBuys(
    filter?: ModelPackagesBuyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPackagesBuysQuery> {
    const statement = `query ListPackagesBuys($filter: ModelPackagesBuyFilterInput, $limit: Int, $nextToken: String) {
        listPackagesBuys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            userID
            numberofappointmentsused
            consultationfees
            conultationfesscurrency
            numofappointments
            validity
            date
            doctortype
            PaymentCompletionStatus
            PaymentMode
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPackagesBuysQuery>response.data.listPackagesBuys;
  }
  async GetPackages(id: string): Promise<GetPackagesQuery> {
    const statement = `query GetPackages($id: ID!) {
        getPackages(id: $id) {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPackagesQuery>response.data.getPackages;
  }
  async ListPackagess(
    filter?: ModelPackagesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPackagessQuery> {
    const statement = `query ListPackagess($filter: ModelPackagesFilterInput, $limit: Int, $nextToken: String) {
        listPackagess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            consultationfees
            conultationfesscurrency
            numofappointments
            validity
            doctortype
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPackagessQuery>response.data.listPackagess;
  }
  async GetBroadCast(id: string): Promise<GetBroadCastQuery> {
    const statement = `query GetBroadCast($id: ID!) {
        getBroadCast(id: $id) {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBroadCastQuery>response.data.getBroadCast;
  }
  async ListBroadCasts(
    filter?: ModelBroadCastFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBroadCastsQuery> {
    const statement = `query ListBroadCasts($filter: ModelBroadCastFilterInput, $limit: Int, $nextToken: String) {
        listBroadCasts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            date
            name
            description
            doctortype
            BroadCastStatus
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBroadCastsQuery>response.data.listBroadCasts;
  }
  async GetCommunities(id: string): Promise<GetCommunitiesQuery> {
    const statement = `query GetCommunities($id: ID!) {
        getCommunities(id: $id) {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommunitiesQuery>response.data.getCommunities;
  }
  async ListCommunitiess(
    filter?: ModelCommunitiesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommunitiessQuery> {
    const statement = `query ListCommunitiess($filter: ModelCommunitiesFilterInput, $limit: Int, $nextToken: String) {
        listCommunitiess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            communityname
            communityowner
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommunitiessQuery>response.data.listCommunitiess;
  }
  async GetContactUs(id: string): Promise<GetContactUsQuery> {
    const statement = `query GetContactUs($id: ID!) {
        getContactUs(id: $id) {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetContactUsQuery>response.data.getContactUs;
  }
  async ListContactUss(
    filter?: ModelContactUsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListContactUssQuery> {
    const statement = `query ListContactUss($filter: ModelContactUsFilterInput, $limit: Int, $nextToken: String) {
        listContactUss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userid
            date
            title
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListContactUssQuery>response.data.listContactUss;
  }
  async GetNotifications(id: string): Promise<GetNotificationsQuery> {
    const statement = `query GetNotifications($id: ID!) {
        getNotifications(id: $id) {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotificationsQuery>response.data.getNotifications;
  }
  async ListNotificationss(
    filter?: ModelNotificationsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotificationssQuery> {
    const statement = `query ListNotificationss($filter: ModelNotificationsFilterInput, $limit: Int, $nextToken: String) {
        listNotificationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            meetingid
            request
            userid
            date
            doctorid
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotificationssQuery>response.data.listNotificationss;
  }
  async GetPaymentfromWallet(id: string): Promise<GetPaymentfromWalletQuery> {
    const statement = `query GetPaymentfromWallet($id: ID!) {
        getPaymentfromWallet(id: $id) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPaymentfromWalletQuery>response.data.getPaymentfromWallet;
  }
  async ListPaymentfromWallets(
    filter?: ModelPaymentfromWalletFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPaymentfromWalletsQuery> {
    const statement = `query ListPaymentfromWallets($filter: ModelPaymentfromWalletFilterInput, $limit: Int, $nextToken: String) {
        listPaymentfromWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            amount
            currency
            date
            paymentfrom
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPaymentfromWalletsQuery>response.data.listPaymentfromWallets;
  }
  async GetPaymentforWallet(id: string): Promise<GetPaymentforWalletQuery> {
    const statement = `query GetPaymentforWallet($id: ID!) {
        getPaymentforWallet(id: $id) {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPaymentforWalletQuery>response.data.getPaymentforWallet;
  }
  async ListPaymentforWallets(
    filter?: ModelPaymentforWalletFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPaymentforWalletsQuery> {
    const statement = `query ListPaymentforWallets($filter: ModelPaymentforWalletFilterInput, $limit: Int, $nextToken: String) {
        listPaymentforWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            amount
            currency
            date
            paymentfrom
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPaymentforWalletsQuery>response.data.listPaymentforWallets;
  }
  async GetPaymentforAppointment(
    id: string
  ): Promise<GetPaymentforAppointmentQuery> {
    const statement = `query GetPaymentforAppointment($id: ID!) {
        getPaymentforAppointment(id: $id) {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPaymentforAppointmentQuery>(
      response.data.getPaymentforAppointment
    );
  }
  async ListPaymentforAppointments(
    filter?: ModelPaymentforAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPaymentforAppointmentsQuery> {
    const statement = `query ListPaymentforAppointments($filter: ModelPaymentforAppointmentFilterInput, $limit: Int, $nextToken: String) {
        listPaymentforAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            amount
            paymentfrom
            currency
            date
            paymentto
            appointmentid
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPaymentforAppointmentsQuery>(
      response.data.listPaymentforAppointments
    );
  }
  async GetWellnessPost(id: string): Promise<GetWellnessPostQuery> {
    const statement = `query GetWellnessPost($id: ID!) {
        getWellnessPost(id: $id) {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetWellnessPostQuery>response.data.getWellnessPost;
  }
  async ListWellnessPosts(
    filter?: ModelWellnessPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListWellnessPostsQuery> {
    const statement = `query ListWellnessPosts($filter: ModelWellnessPostFilterInput, $limit: Int, $nextToken: String) {
        listWellnessPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            image
            date
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListWellnessPostsQuery>response.data.listWellnessPosts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            UserID
            postidreference
            PostType
            title
            image
            date
            description
            numberoflikes
            imagetype
            DoctorType
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetLikes(id: string): Promise<GetLikesQuery> {
    const statement = `query GetLikes($id: ID!) {
        getLikes(id: $id) {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLikesQuery>response.data.getLikes;
  }
  async ListLikess(
    filter?: ModelLikesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLikessQuery> {
    const statement = `query ListLikess($filter: ModelLikesFilterInput, $limit: Int, $nextToken: String) {
        listLikess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            PostID
            date
            UserId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLikessQuery>response.data.listLikess;
  }
  async GetComments(id: string): Promise<GetCommentsQuery> {
    const statement = `query GetComments($id: ID!) {
        getComments(id: $id) {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentsQuery>response.data.getComments;
  }
  async ListCommentss(
    filter?: ModelCommentsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentssQuery> {
    const statement = `query ListCommentss($filter: ModelCommentsFilterInput, $limit: Int, $nextToken: String) {
        listCommentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            PostID
            UserId
            date
            comment
            commentfrom
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentssQuery>response.data.listCommentss;
  }
  async GetReplyComments(id: string): Promise<GetReplyCommentsQuery> {
    const statement = `query GetReplyComments($id: ID!) {
        getReplyComments(id: $id) {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReplyCommentsQuery>response.data.getReplyComments;
  }
  async ListReplyCommentss(
    filter?: ModelReplyCommentsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReplyCommentssQuery> {
    const statement = `query ListReplyCommentss($filter: ModelReplyCommentsFilterInput, $limit: Int, $nextToken: String) {
        listReplyCommentss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            PostID
            UserId
            comment
            date
            commentfrom
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReplyCommentssQuery>response.data.listReplyCommentss;
  }
  async GetReport(id: string): Promise<GetReportQuery> {
    const statement = `query GetReport($id: ID!) {
        getReport(id: $id) {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReportQuery>response.data.getReport;
  }
  async ListReports(
    filter?: ModelReportFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReportsQuery> {
    const statement = `query ListReports($filter: ModelReportFilterInput, $limit: Int, $nextToken: String) {
        listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            doctorID
            meetingid
            reoporttype
            date
            summnaryname
            summarydosage
            summnaryinstr
            summnaryreason
            rxname
            rxdosage
            rxinstr
            rxreason
            labsname
            labsdosage
            labsinstr
            labsreason
            visitnotes
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReportsQuery>response.data.listReports;
  }
  async GetCoachPrescTask(id: string): Promise<GetCoachPrescTaskQuery> {
    const statement = `query GetCoachPrescTask($id: ID!) {
        getCoachPrescTask(id: $id) {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCoachPrescTaskQuery>response.data.getCoachPrescTask;
  }
  async ListCoachPrescTasks(
    filter?: ModelCoachPrescTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCoachPrescTasksQuery> {
    const statement = `query ListCoachPrescTasks($filter: ModelCoachPrescTaskFilterInput, $limit: Int, $nextToken: String) {
        listCoachPrescTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            doctorID
            meetingid
            weekday
            task
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCoachPrescTasksQuery>response.data.listCoachPrescTasks;
  }
  async GetReportsShared(id: string): Promise<GetReportsSharedQuery> {
    const statement = `query GetReportsShared($id: ID!) {
        getReportsShared(id: $id) {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetReportsSharedQuery>response.data.getReportsShared;
  }
  async ListReportsShareds(
    filter?: ModelReportsSharedFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReportsSharedsQuery> {
    const statement = `query ListReportsShareds($filter: ModelReportsSharedFilterInput, $limit: Int, $nextToken: String) {
        listReportsShareds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            doctorID
            meetingid
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListReportsSharedsQuery>response.data.listReportsShareds;
  }
  async GetAppointment(id: string): Promise<GetAppointmentQuery> {
    const statement = `query GetAppointment($id: ID!) {
        getAppointment(id: $id) {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAppointmentQuery>response.data.getAppointment;
  }
  async ListAppointments(
    filter?: ModelAppointmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAppointmentsQuery> {
    const statement = `query ListAppointments($filter: ModelAppointmentFilterInput, $limit: Int, $nextToken: String) {
        listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            doctorID
            paymentMode
            packagebuyid
            consultationfees
            PaymentCompletionStatus
            conultationfesscurrency
            starttime
            slottime
            date
            meetingid
            status
            request
            message
            personalConsult
            videoconsult
            cancelledbyuser
            cancellationdate
            cancelledbydoctor
            doctortype
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAppointmentsQuery>response.data.listAppointments;
  }
  async GetCommunityMessage(id: string): Promise<GetCommunityMessageQuery> {
    const statement = `query GetCommunityMessage($id: ID!) {
        getCommunityMessage(id: $id) {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommunityMessageQuery>response.data.getCommunityMessage;
  }
  async ListCommunityMessages(
    filter?: ModelCommunityMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommunityMessagesQuery> {
    const statement = `query ListCommunityMessages($filter: ModelCommunityMessageFilterInput, $limit: Int, $nextToken: String) {
        listCommunityMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            communityid
            messagefrom
            date
            content
            messagetype
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommunityMessagesQuery>response.data.listCommunityMessages;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            DoctorsID
            UserID
            messagetype
            content
            currentmessage
            readbydoctor
            imageboolean
            readbyuser
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetUserDatabase(id: string): Promise<GetUserDatabaseQuery> {
    const statement = `query GetUserDatabase($id: ID!) {
        getUserDatabase(id: $id) {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserDatabaseQuery>response.data.getUserDatabase;
  }
  async ListUserDatabases(
    filter?: ModelUserDatabaseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserDatabasesQuery> {
    const statement = `query ListUserDatabases($filter: ModelUserDatabaseFilterInput, $limit: Int, $nextToken: String) {
        listUserDatabases(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            UserID
            name
            lastname
            sex
            birthday
            hieght
            weight
            emailaddress
            phonenumber
            emergencycontact
            streetaddress
            city
            zipcode
            smoke
            alchol
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserDatabasesQuery>response.data.listUserDatabases;
  }
  async GetAllergies(id: string): Promise<GetAllergiesQuery> {
    const statement = `query GetAllergies($id: ID!) {
        getAllergies(id: $id) {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAllergiesQuery>response.data.getAllergies;
  }
  async ListAllergiess(
    filter?: ModelAllergiesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAllergiessQuery> {
    const statement = `query ListAllergiess($filter: ModelAllergiesFilterInput, $limit: Int, $nextToken: String) {
        listAllergiess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userid
            allergyname
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAllergiessQuery>response.data.listAllergiess;
  }
  async GetExperience(id: string): Promise<GetExperienceQuery> {
    const statement = `query GetExperience($id: ID!) {
        getExperience(id: $id) {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetExperienceQuery>response.data.getExperience;
  }
  async ListExperiences(
    filter?: ModelExperienceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListExperiencesQuery> {
    const statement = `query ListExperiences($filter: ModelExperienceFilterInput, $limit: Int, $nextToken: String) {
        listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            Title
            CompanyName
            location
            doctortype
            Description
            startdate
            enddate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListExperiencesQuery>response.data.listExperiences;
  }
  async GetDoctor(id: string): Promise<GetDoctorQuery> {
    const statement = `query GetDoctor($id: ID!) {
        getDoctor(id: $id) {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorQuery>response.data.getDoctor;
  }
  async ListDoctors(
    filter?: ModelDoctorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorsQuery> {
    const statement = `query ListDoctors($filter: ModelDoctorFilterInput, $limit: Int, $nextToken: String) {
        listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            UserID
            doctortype
            name
            about
            npi
            languagesspoken
            country
            localaddress
            paycut
            state
            zipcode
            specialization
            yearsofexxperience
            gender
            status
            insurance
            offlineconsultation
            appointmentscompleted
            viewsonprofile
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorsQuery>response.data.listDoctors;
  }
  async GetCertificates(id: string): Promise<GetCertificatesQuery> {
    const statement = `query GetCertificates($id: ID!) {
        getCertificates(id: $id) {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCertificatesQuery>response.data.getCertificates;
  }
  async ListCertificatess(
    filter?: ModelCertificatesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCertificatessQuery> {
    const statement = `query ListCertificatess($filter: ModelCertificatesFilterInput, $limit: Int, $nextToken: String) {
        listCertificatess(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            imageurl
            description
            doctortype
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCertificatessQuery>response.data.listCertificatess;
  }
  async GetSlots(id: string): Promise<GetSlotsQuery> {
    const statement = `query GetSlots($id: ID!) {
        getSlots(id: $id) {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSlotsQuery>response.data.getSlots;
  }
  async ListSlotss(
    filter?: ModelSlotsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSlotssQuery> {
    const statement = `query ListSlotss($filter: ModelSlotsFilterInput, $limit: Int, $nextToken: String) {
        listSlotss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            consulttime
            starttime
            endtime
            consultationfees
            conultationfesscurrency
            videoconsultations
            inpersonconsultation
            videoandinpersonconsultation
            consultationtimeedit
            monday
            tuesday
            wednesday
            thursday
            friday
            saturday
            sunday
            activeinactive
            doctortype
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSlotssQuery>response.data.listSlotss;
  }
  async GetInvite(id: string): Promise<GetInviteQuery> {
    const statement = `query GetInvite($id: ID!) {
        getInvite(id: $id) {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInviteQuery>response.data.getInvite;
  }
  async ListInvites(
    filter?: ModelInviteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInvitesQuery> {
    const statement = `query ListInvites($filter: ModelInviteFilterInput, $limit: Int, $nextToken: String) {
        listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            UserID
            message
            invite
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInvitesQuery>response.data.listInvites;
  }
  async GetEducation(id: string): Promise<GetEducationQuery> {
    const statement = `query GetEducation($id: ID!) {
        getEducation(id: $id) {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEducationQuery>response.data.getEducation;
  }
  async ListEducations(
    filter?: ModelEducationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEducationsQuery> {
    const statement = `query ListEducations($filter: ModelEducationFilterInput, $limit: Int, $nextToken: String) {
        listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            nameofuniversity
            fieldofstudy
            doctortype
            degree
            startdate
            enddate
            gradepoint
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEducationsQuery>response.data.listEducations;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          userid
          email
          message {
            __typename
            nextToken
          }
          awsdate
          appointment {
            __typename
            nextToken
          }
          userdatabase {
            __typename
            nextToken
          }
          doctor {
            __typename
            nextToken
          }
          post {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateBookMarkListener: Observable<
    SubscriptionResponse<OnCreateBookMarkSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBookMark {
        onCreateBookMark {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBookMarkSubscription>>;

  OnUpdateBookMarkListener: Observable<
    SubscriptionResponse<OnUpdateBookMarkSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBookMark {
        onUpdateBookMark {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBookMarkSubscription>>;

  OnDeleteBookMarkListener: Observable<
    SubscriptionResponse<OnDeleteBookMarkSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBookMark {
        onDeleteBookMark {
          __typename
          id
          userid
          bookmarktype
          discussiongroupid
          livebroadcastingid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBookMarkSubscription>>;

  OnCreatePaymentRequestListener: Observable<
    SubscriptionResponse<OnCreatePaymentRequestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePaymentRequest {
        onCreatePaymentRequest {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePaymentRequestSubscription>>;

  OnUpdatePaymentRequestListener: Observable<
    SubscriptionResponse<OnUpdatePaymentRequestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePaymentRequest {
        onUpdatePaymentRequest {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePaymentRequestSubscription>>;

  OnDeletePaymentRequestListener: Observable<
    SubscriptionResponse<OnDeletePaymentRequestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePaymentRequest {
        onDeletePaymentRequest {
          __typename
          id
          PaymentRequestType
          doctorID
          date
          appointmentid
          request
          paidtodoctordate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePaymentRequestSubscription>>;

  OnCreatePackagesBuyListener: Observable<
    SubscriptionResponse<OnCreatePackagesBuySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePackagesBuy {
        onCreatePackagesBuy {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePackagesBuySubscription>>;

  OnUpdatePackagesBuyListener: Observable<
    SubscriptionResponse<OnUpdatePackagesBuySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePackagesBuy {
        onUpdatePackagesBuy {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePackagesBuySubscription>>;

  OnDeletePackagesBuyListener: Observable<
    SubscriptionResponse<OnDeletePackagesBuySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePackagesBuy {
        onDeletePackagesBuy {
          __typename
          id
          doctorID
          userID
          numberofappointmentsused
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          date
          doctortype
          PaymentCompletionStatus
          PaymentMode
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePackagesBuySubscription>>;

  OnCreatePackagesListener: Observable<
    SubscriptionResponse<OnCreatePackagesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePackages {
        onCreatePackages {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePackagesSubscription>>;

  OnUpdatePackagesListener: Observable<
    SubscriptionResponse<OnUpdatePackagesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePackages {
        onUpdatePackages {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePackagesSubscription>>;

  OnDeletePackagesListener: Observable<
    SubscriptionResponse<OnDeletePackagesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePackages {
        onDeletePackages {
          __typename
          id
          doctorID
          consultationfees
          conultationfesscurrency
          numofappointments
          validity
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePackagesSubscription>>;

  OnCreateBroadCastListener: Observable<
    SubscriptionResponse<OnCreateBroadCastSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBroadCast {
        onCreateBroadCast {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBroadCastSubscription>>;

  OnUpdateBroadCastListener: Observable<
    SubscriptionResponse<OnUpdateBroadCastSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBroadCast {
        onUpdateBroadCast {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBroadCastSubscription>>;

  OnDeleteBroadCastListener: Observable<
    SubscriptionResponse<OnDeleteBroadCastSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBroadCast {
        onDeleteBroadCast {
          __typename
          id
          doctorID
          date
          name
          description
          doctortype
          BroadCastStatus
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBroadCastSubscription>>;

  OnCreateCommunitiesListener: Observable<
    SubscriptionResponse<OnCreateCommunitiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCommunities {
        onCreateCommunities {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommunitiesSubscription>>;

  OnUpdateCommunitiesListener: Observable<
    SubscriptionResponse<OnUpdateCommunitiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCommunities {
        onUpdateCommunities {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommunitiesSubscription>>;

  OnDeleteCommunitiesListener: Observable<
    SubscriptionResponse<OnDeleteCommunitiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCommunities {
        onDeleteCommunities {
          __typename
          id
          communityname
          communityowner
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommunitiesSubscription>>;

  OnCreateContactUsListener: Observable<
    SubscriptionResponse<OnCreateContactUsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateContactUs {
        onCreateContactUs {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateContactUsSubscription>>;

  OnUpdateContactUsListener: Observable<
    SubscriptionResponse<OnUpdateContactUsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateContactUs {
        onUpdateContactUs {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateContactUsSubscription>>;

  OnDeleteContactUsListener: Observable<
    SubscriptionResponse<OnDeleteContactUsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteContactUs {
        onDeleteContactUs {
          __typename
          id
          userid
          date
          title
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteContactUsSubscription>>;

  OnCreateNotificationsListener: Observable<
    SubscriptionResponse<OnCreateNotificationsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNotifications {
        onCreateNotifications {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateNotificationsSubscription>>;

  OnUpdateNotificationsListener: Observable<
    SubscriptionResponse<OnUpdateNotificationsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNotifications {
        onUpdateNotifications {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateNotificationsSubscription>>;

  OnDeleteNotificationsListener: Observable<
    SubscriptionResponse<OnDeleteNotificationsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNotifications {
        onDeleteNotifications {
          __typename
          id
          meetingid
          request
          userid
          date
          doctorid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteNotificationsSubscription>>;

  OnCreatePaymentfromWalletListener: Observable<
    SubscriptionResponse<OnCreatePaymentfromWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePaymentfromWallet {
        onCreatePaymentfromWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePaymentfromWalletSubscription>>;

  OnUpdatePaymentfromWalletListener: Observable<
    SubscriptionResponse<OnUpdatePaymentfromWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePaymentfromWallet {
        onUpdatePaymentfromWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePaymentfromWalletSubscription>>;

  OnDeletePaymentfromWalletListener: Observable<
    SubscriptionResponse<OnDeletePaymentfromWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePaymentfromWallet {
        onDeletePaymentfromWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePaymentfromWalletSubscription>>;

  OnCreatePaymentforWalletListener: Observable<
    SubscriptionResponse<OnCreatePaymentforWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePaymentforWallet {
        onCreatePaymentforWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePaymentforWalletSubscription>>;

  OnUpdatePaymentforWalletListener: Observable<
    SubscriptionResponse<OnUpdatePaymentforWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePaymentforWallet {
        onUpdatePaymentforWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePaymentforWalletSubscription>>;

  OnDeletePaymentforWalletListener: Observable<
    SubscriptionResponse<OnDeletePaymentforWalletSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePaymentforWallet {
        onDeletePaymentforWallet {
          __typename
          id
          amount
          currency
          date
          paymentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePaymentforWalletSubscription>>;

  OnCreatePaymentforAppointmentListener: Observable<
    SubscriptionResponse<OnCreatePaymentforAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePaymentforAppointment {
        onCreatePaymentforAppointment {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreatePaymentforAppointmentSubscription>
  >;

  OnUpdatePaymentforAppointmentListener: Observable<
    SubscriptionResponse<OnUpdatePaymentforAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePaymentforAppointment {
        onUpdatePaymentforAppointment {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdatePaymentforAppointmentSubscription>
  >;

  OnDeletePaymentforAppointmentListener: Observable<
    SubscriptionResponse<OnDeletePaymentforAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePaymentforAppointment {
        onDeletePaymentforAppointment {
          __typename
          id
          amount
          paymentfrom
          currency
          date
          paymentto
          appointmentid
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeletePaymentforAppointmentSubscription>
  >;

  OnCreateWellnessPostListener: Observable<
    SubscriptionResponse<OnCreateWellnessPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateWellnessPost {
        onCreateWellnessPost {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateWellnessPostSubscription>>;

  OnUpdateWellnessPostListener: Observable<
    SubscriptionResponse<OnUpdateWellnessPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateWellnessPost {
        onUpdateWellnessPost {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateWellnessPostSubscription>>;

  OnDeleteWellnessPostListener: Observable<
    SubscriptionResponse<OnDeleteWellnessPostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteWellnessPost {
        onDeleteWellnessPost {
          __typename
          id
          title
          image
          date
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteWellnessPostSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          UserID
          postidreference
          PostType
          title
          image
          date
          description
          numberoflikes
          imagetype
          DoctorType
          likedbyusers {
            __typename
            nextToken
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateLikesListener: Observable<
    SubscriptionResponse<OnCreateLikesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLikes {
        onCreateLikes {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateLikesSubscription>>;

  OnUpdateLikesListener: Observable<
    SubscriptionResponse<OnUpdateLikesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLikes {
        onUpdateLikes {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateLikesSubscription>>;

  OnDeleteLikesListener: Observable<
    SubscriptionResponse<OnDeleteLikesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLikes {
        onDeleteLikes {
          __typename
          id
          PostID
          date
          UserId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteLikesSubscription>>;

  OnCreateCommentsListener: Observable<
    SubscriptionResponse<OnCreateCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComments {
        onCreateComments {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentsSubscription>>;

  OnUpdateCommentsListener: Observable<
    SubscriptionResponse<OnUpdateCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComments {
        onUpdateComments {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentsSubscription>>;

  OnDeleteCommentsListener: Observable<
    SubscriptionResponse<OnDeleteCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComments {
        onDeleteComments {
          __typename
          id
          PostID
          UserId
          date
          comment
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentsSubscription>>;

  OnCreateReplyCommentsListener: Observable<
    SubscriptionResponse<OnCreateReplyCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReplyComments {
        onCreateReplyComments {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateReplyCommentsSubscription>>;

  OnUpdateReplyCommentsListener: Observable<
    SubscriptionResponse<OnUpdateReplyCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReplyComments {
        onUpdateReplyComments {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateReplyCommentsSubscription>>;

  OnDeleteReplyCommentsListener: Observable<
    SubscriptionResponse<OnDeleteReplyCommentsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReplyComments {
        onDeleteReplyComments {
          __typename
          id
          PostID
          UserId
          comment
          date
          commentfrom
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteReplyCommentsSubscription>>;

  OnCreateReportListener: Observable<
    SubscriptionResponse<OnCreateReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReport {
        onCreateReport {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateReportSubscription>>;

  OnUpdateReportListener: Observable<
    SubscriptionResponse<OnUpdateReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReport {
        onUpdateReport {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateReportSubscription>>;

  OnDeleteReportListener: Observable<
    SubscriptionResponse<OnDeleteReportSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReport {
        onDeleteReport {
          __typename
          id
          userID
          doctorID
          meetingid
          reoporttype
          date
          summnaryname
          summarydosage
          summnaryinstr
          summnaryreason
          rxname
          rxdosage
          rxinstr
          rxreason
          labsname
          labsdosage
          labsinstr
          labsreason
          visitnotes
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteReportSubscription>>;

  OnCreateCoachPrescTaskListener: Observable<
    SubscriptionResponse<OnCreateCoachPrescTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCoachPrescTask {
        onCreateCoachPrescTask {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCoachPrescTaskSubscription>>;

  OnUpdateCoachPrescTaskListener: Observable<
    SubscriptionResponse<OnUpdateCoachPrescTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCoachPrescTask {
        onUpdateCoachPrescTask {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCoachPrescTaskSubscription>>;

  OnDeleteCoachPrescTaskListener: Observable<
    SubscriptionResponse<OnDeleteCoachPrescTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCoachPrescTask {
        onDeleteCoachPrescTask {
          __typename
          id
          userID
          doctorID
          meetingid
          weekday
          task
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCoachPrescTaskSubscription>>;

  OnCreateReportsSharedListener: Observable<
    SubscriptionResponse<OnCreateReportsSharedSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReportsShared {
        onCreateReportsShared {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateReportsSharedSubscription>>;

  OnUpdateReportsSharedListener: Observable<
    SubscriptionResponse<OnUpdateReportsSharedSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReportsShared {
        onUpdateReportsShared {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateReportsSharedSubscription>>;

  OnDeleteReportsSharedListener: Observable<
    SubscriptionResponse<OnDeleteReportsSharedSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReportsShared {
        onDeleteReportsShared {
          __typename
          id
          userID
          doctorID
          meetingid
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteReportsSharedSubscription>>;

  OnCreateAppointmentListener: Observable<
    SubscriptionResponse<OnCreateAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAppointment {
        onCreateAppointment {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAppointmentSubscription>>;

  OnUpdateAppointmentListener: Observable<
    SubscriptionResponse<OnUpdateAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAppointment {
        onUpdateAppointment {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAppointmentSubscription>>;

  OnDeleteAppointmentListener: Observable<
    SubscriptionResponse<OnDeleteAppointmentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAppointment {
        onDeleteAppointment {
          __typename
          id
          userID
          doctorID
          paymentMode
          packagebuyid
          consultationfees
          PaymentCompletionStatus
          conultationfesscurrency
          starttime
          slottime
          date
          meetingid
          status
          request
          message
          personalConsult
          videoconsult
          cancelledbyuser
          cancellationdate
          cancelledbydoctor
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAppointmentSubscription>>;

  OnCreateCommunityMessageListener: Observable<
    SubscriptionResponse<OnCreateCommunityMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCommunityMessage {
        onCreateCommunityMessage {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommunityMessageSubscription>>;

  OnUpdateCommunityMessageListener: Observable<
    SubscriptionResponse<OnUpdateCommunityMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCommunityMessage {
        onUpdateCommunityMessage {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommunityMessageSubscription>>;

  OnDeleteCommunityMessageListener: Observable<
    SubscriptionResponse<OnDeleteCommunityMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCommunityMessage {
        onDeleteCommunityMessage {
          __typename
          id
          communityid
          messagefrom
          date
          content
          messagetype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommunityMessageSubscription>>;

  OnCreateMessageListener: Observable<
    SubscriptionResponse<OnCreateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateMessageSubscription>>;

  OnUpdateMessageListener: Observable<
    SubscriptionResponse<OnUpdateMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateMessageSubscription>>;

  OnDeleteMessageListener: Observable<
    SubscriptionResponse<OnDeleteMessageSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          DoctorsID
          UserID
          messagetype
          content
          currentmessage
          readbydoctor
          imageboolean
          readbyuser
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteMessageSubscription>>;

  OnCreateUserDatabaseListener: Observable<
    SubscriptionResponse<OnCreateUserDatabaseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserDatabase {
        onCreateUserDatabase {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserDatabaseSubscription>>;

  OnUpdateUserDatabaseListener: Observable<
    SubscriptionResponse<OnUpdateUserDatabaseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserDatabase {
        onUpdateUserDatabase {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserDatabaseSubscription>>;

  OnDeleteUserDatabaseListener: Observable<
    SubscriptionResponse<OnDeleteUserDatabaseSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserDatabase {
        onDeleteUserDatabase {
          __typename
          id
          UserID
          name
          lastname
          sex
          birthday
          hieght
          weight
          emailaddress
          phonenumber
          emergencycontact
          streetaddress
          city
          zipcode
          smoke
          alchol
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserDatabaseSubscription>>;

  OnCreateAllergiesListener: Observable<
    SubscriptionResponse<OnCreateAllergiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAllergies {
        onCreateAllergies {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAllergiesSubscription>>;

  OnUpdateAllergiesListener: Observable<
    SubscriptionResponse<OnUpdateAllergiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAllergies {
        onUpdateAllergies {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAllergiesSubscription>>;

  OnDeleteAllergiesListener: Observable<
    SubscriptionResponse<OnDeleteAllergiesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAllergies {
        onDeleteAllergies {
          __typename
          id
          userid
          allergyname
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAllergiesSubscription>>;

  OnCreateExperienceListener: Observable<
    SubscriptionResponse<OnCreateExperienceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateExperience {
        onCreateExperience {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateExperienceSubscription>>;

  OnUpdateExperienceListener: Observable<
    SubscriptionResponse<OnUpdateExperienceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateExperience {
        onUpdateExperience {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateExperienceSubscription>>;

  OnDeleteExperienceListener: Observable<
    SubscriptionResponse<OnDeleteExperienceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteExperience {
        onDeleteExperience {
          __typename
          id
          doctorID
          Title
          CompanyName
          location
          doctortype
          Description
          startdate
          enddate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteExperienceSubscription>>;

  OnCreateDoctorListener: Observable<
    SubscriptionResponse<OnCreateDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctor {
        onCreateDoctor {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateDoctorSubscription>>;

  OnUpdateDoctorListener: Observable<
    SubscriptionResponse<OnUpdateDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctor {
        onUpdateDoctor {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateDoctorSubscription>>;

  OnDeleteDoctorListener: Observable<
    SubscriptionResponse<OnDeleteDoctorSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctor {
        onDeleteDoctor {
          __typename
          id
          UserID
          doctortype
          name
          about
          npi
          languagesspoken
          country
          localaddress
          paycut
          state
          zipcode
          specialization
          yearsofexxperience
          gender
          status
          insurance
          offlineconsultation
          appointmentscompleted
          viewsonprofile
          education {
            __typename
            nextToken
          }
          experience {
            __typename
            nextToken
          }
          certificates {
            __typename
            nextToken
          }
          appointment {
            __typename
            nextToken
          }
          message {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteDoctorSubscription>>;

  OnCreateCertificatesListener: Observable<
    SubscriptionResponse<OnCreateCertificatesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCertificates {
        onCreateCertificates {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCertificatesSubscription>>;

  OnUpdateCertificatesListener: Observable<
    SubscriptionResponse<OnUpdateCertificatesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCertificates {
        onUpdateCertificates {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCertificatesSubscription>>;

  OnDeleteCertificatesListener: Observable<
    SubscriptionResponse<OnDeleteCertificatesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCertificates {
        onDeleteCertificates {
          __typename
          id
          doctorID
          imageurl
          description
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCertificatesSubscription>>;

  OnCreateSlotsListener: Observable<
    SubscriptionResponse<OnCreateSlotsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSlots {
        onCreateSlots {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateSlotsSubscription>>;

  OnUpdateSlotsListener: Observable<
    SubscriptionResponse<OnUpdateSlotsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSlots {
        onUpdateSlots {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateSlotsSubscription>>;

  OnDeleteSlotsListener: Observable<
    SubscriptionResponse<OnDeleteSlotsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSlots {
        onDeleteSlots {
          __typename
          id
          doctorID
          consulttime
          starttime
          endtime
          consultationfees
          conultationfesscurrency
          videoconsultations
          inpersonconsultation
          videoandinpersonconsultation
          consultationtimeedit
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
          activeinactive
          doctortype
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteSlotsSubscription>>;

  OnCreateInviteListener: Observable<
    SubscriptionResponse<OnCreateInviteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInvite {
        onCreateInvite {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateInviteSubscription>>;

  OnUpdateInviteListener: Observable<
    SubscriptionResponse<OnUpdateInviteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInvite {
        onUpdateInvite {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateInviteSubscription>>;

  OnDeleteInviteListener: Observable<
    SubscriptionResponse<OnDeleteInviteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInvite {
        onDeleteInvite {
          __typename
          id
          doctorID
          UserID
          message
          invite
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteInviteSubscription>>;

  OnCreateEducationListener: Observable<
    SubscriptionResponse<OnCreateEducationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEducation {
        onCreateEducation {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEducationSubscription>>;

  OnUpdateEducationListener: Observable<
    SubscriptionResponse<OnUpdateEducationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEducation {
        onUpdateEducation {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEducationSubscription>>;

  OnDeleteEducationListener: Observable<
    SubscriptionResponse<OnDeleteEducationSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEducation {
        onDeleteEducation {
          __typename
          id
          doctorID
          nameofuniversity
          fieldofstudy
          doctortype
          degree
          startdate
          enddate
          gradepoint
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEducationSubscription>>;
}
