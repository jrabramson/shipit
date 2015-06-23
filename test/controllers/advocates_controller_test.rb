require 'test_helper'

class AdvocatesControllerTest < ActionController::TestCase
  setup do
    @advocate = advocates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:advocates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create advocate" do
    assert_difference('Advocate.count') do
      post :create, advocate: { company: @advocate.company, email: @advocate.email, name: @advocate.name, note: @advocate.note, ref_email: @advocate.ref_email }
    end

    assert_redirected_to advocate_path(assigns(:advocate))
  end

  test "should show advocate" do
    get :show, id: @advocate
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @advocate
    assert_response :success
  end

  test "should update advocate" do
    patch :update, id: @advocate, advocate: { company: @advocate.company, email: @advocate.email, name: @advocate.name, note: @advocate.note, ref_email: @advocate.ref_email }
    assert_redirected_to advocate_path(assigns(:advocate))
  end

  test "should destroy advocate" do
    assert_difference('Advocate.count', -1) do
      delete :destroy, id: @advocate
    end

    assert_redirected_to advocates_path
  end
end
