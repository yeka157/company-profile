export interface Member {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface MemberWithPosition extends Member {
  position: string;
}

export interface DevMember extends Member {
  email: string;
}

export interface DevMemberWithPosition extends DevMember {
  position: string;
}
