type ISODateString = string & { readonly __ISODateStringBrand: unique symbol };

interface EventDetails {
    event_id?: string;
    start_date?: ISODateString;
    end_date?: ISODateString;
    event_name?: string;
    event_created?: ISODateString;
    venue?: string;
    description?: string;
    organizer?: string;
    approval_status?: 'approved' | 'rejected' | 'pending';
}

interface CommentDetails {
    event_id?: string;
    comment_id?: string;
    comment_content?: string;
    posted_on?: ISODateString;
}

interface LastEvaluatedKeyProp {
    event_id?: string;
    start_date?: ISODateString;
}

interface Params<T extends string> {
    params: {
        [key in T]: string;
    };
}
