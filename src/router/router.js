import { createBrowserRouter } from 'react-router-dom';
import PostsContainer from '../rest/post/PostsContainer';
import PostRead from '../rest/post/PostRead';
import PostUpdate from '../rest/post/PostUpdate';
import PostDelete from '../rest/post/PostDelete';
import MemberLogin from '../rest/member/MemberLogin';
import JoinContainer from '../rest/member/JoinContainer';
import UpdateContainer from '../rest/member/UpdateContainer';
import DeleteContainer from '../rest/member/DeleteContainer';
import Mypage from '../rest/mypage/Mypage';
import PostLayout from '../rest/post/PostLayout';

const router = createBrowserRouter([
  // 헤더 푸터는 모든 페이지에서 필요하기에 묶어준다.
  {
    path : "/post",
    element : <PostLayout />,
    children : [
      {
        // 자식요소중 대표
        index : true,
        element : <PostsContainer />
      },
      {
        path : "read",
        element : <PostRead/>,
        children : [
          {
            path : ":id",
            element : <PostRead/>
          }
        ]
      },
      {
        path : "update",
        element : <PostUpdate/>,
        children : [
          {
            path : ":id",
            element : <PostUpdate/>
          }
        ]
      },
      {
        path : "remove",
        element : <PostDelete/>,
        children : [
          {
            path : ":id",
            element : <PostDelete/>
          }
        ]
      },
    ]
  },
  {
    path : "/member/login",
    element : <MemberLogin />
  },
  {
    path : "/member/join",
    element : <JoinContainer />
  },
  {
    path : "/member/update",
    element : <UpdateContainer />
  },
  {
    path : "/member/delete",
    element : <DeleteContainer />
  },
  {
    path : "/mypage",
    element : <Mypage />
  },
])

export default router;