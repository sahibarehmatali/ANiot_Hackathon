// app/components/UserProfile.tsx
import FetchDataComponent from "../components/FetchDataComponent";
export default function UserProfile() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Personal Information</h2>
            {/* Add profile form here */}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Order History</h2>
            {/* Display order history here */}
          </div>
          <div>
          <h1>Welcome to AN CMS</h1>
          <FetchDataComponent />
          </div>
        </div>
      </div>
    );
  }